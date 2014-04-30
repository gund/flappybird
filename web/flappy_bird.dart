library flappy_bird;

import 'dart:html';
import 'dart:math';
import 'dart:async';
import 'dart:web_audio';
import 'browser_detect.dart';

part 'audio.dart';

// Constants
const double G = 0.012;
const double G2 = G * 10;
const double groundHeight = 1/5;
const double birdMaxSpeed = 700.0;
const int birdR = 10;
const int birdRX = 34;
const int birdRY = 24;
const int birdSwipeHeight = 60;
const int pipeWidth = 52;
const int pipeHeight = 110;
const double pipeDistance = pipeWidth * 3.0;
const double pipeSpeed = G * 250;//3.5;
const int pipeGap = 50;
const int garbagePipesCount = 10; // Garbage every 10 pipes
const double garbageFreq = pipeSpeed * 275   * garbagePipesCount;
const int timeAfterLoose = 500;
const double backgroundSpeed = pipeSpeed/2;

// Window
int w, h;
double aspect;
CanvasElement canv;
CanvasElement realCanv;
CanvasElement bufferCanv;
CanvasRenderingContext2D ctx;
CanvasRenderingContext2D realCtx;
CanvasRenderingContext2D bufferCtx;
ImageElement img = new ImageElement(src: "img/atlas.png");
Map<String, CanvasElement> textures = new Map<String, CanvasElement>();
Audio audio;
// Game
int gameLevel = 3;
int pipeRange = gameLevel * 50 + 1;
int gameScore = 0;
bool gameIsTouch = false;
double pauseAfterLoose = .0;
String popupMsg = "Click to play!";
bool loose = false;
bool levelChanged = false;
// Animation
double lastPhisicTime = .0;
double lastTime = .0;
double currTime = .0;
double garbageLastTime = .0;
double backgroundAnim = .0;
double groundAnim = .0;
Random rnd = new Random();
DateTime dateTime = new DateTime.now();
int lastAnimationTime = dateTime.millisecondsSinceEpoch;
String backgroundTexture;
String pipeTexture;
String birdTexture;
List<int> backgroundColor = new List<int>();
double splashValue = 1.0;
List<int> splashInfo = [0, 0, 0, 0.02];
bool splashReset = false, resetToHigh = false;
/**
 * (byte) gameState - State of game
 * 000x - Started (1-0) Not started
 * 00x0 - Ready (1-0) Not ready
 * 0x00 - Loose (1-0) Not loose
 * x000 - Reserved
 */
int gameState = 0;
const int STARTED = 1;
const int NOT_STARTED = ~STARTED;
const int READY = 1 << 1;
const int NOT_READY = ~READY;
const int LOOSE = 1 << 2;
const int NOT_LOOSE = ~LOOSE;
const int FULL_STATE = STARTED | READY | LOOSE;
int setGameState(int state) => gameState |= state;
int unSetGameState(int state) => gameState &= ~state;
// Bird
double birdPosition = w*1/4;
double birdHeight = h*1/3;
bool isFall = true, birdBack = false;
double lastBirdHeight = .0;
double birdAnimTime = .0;
int birdAnimState = 0;
double birdAnimAngle = .0;
bool birdAngelBackwise = true;
// Pipes
Map<String, dynamic> currPipe = new Map<String, dynamic>();
Set<Map<String, dynamic>> pipes = new Set<Map<String, dynamic>>();

void main() {
  initAudio();
}

void tick(double time) {
  currTime = time;
  window.requestAnimationFrame(tick);
  phisicTick();
  redrawScene();
}

void phisicTick() {
  if (gameState & (STARTED | READY & ~LOOSE) == STARTED | READY & ~LOOSE) {
    animBackground();
    animBird();
    birdPhisic(currTime);
    movePipes();
    garbageRegenPipes(currTime);
    checkScoreAndCollision();
  }
}

void redrawScene() {
  ctx.clearRect(0, 0, w, h);
  drawBackground();
  renderPipes();
  drawEarth(h*groundHeight);
  drawBird(birdPosition, birdHeight, birdR);
  drawScore();
  drawSplash();
  if (loose || gameState == 0) {
    drawPopup();
  }
  swapBuff();
}

/* ### Phisics Functions ### */

void birdPhisic(double time) {
  double now = time;
  double delta = now - lastTime;
  if (delta > 450) delta *= 2;
  delta = delta*.5;
  if (delta > birdMaxSpeed) delta = birdMaxSpeed;
  if (isFall) {
    birdHeight = birdHeight + G * delta;
  } else {
    if (delta > 70) delta = 50.0;
    birdHeight = birdHeight - G2 * delta;
  }
  correctBird();
}

void correctBird() {
  // Touch Sky
  if (birdHeight + birdRX < -birdRX*2) {
    birdHeight = -birdRX.toDouble();
    isFall = true;
    lastTime = currTime;
  }
  // Touch Ground
  if (birdHeight + birdR > h - h * groundHeight) {
    birdHeight = h - h * groundHeight - birdR;
    gameLoose();
  }
  // Fly Up
  if (!isFall && (lastBirdHeight-birdSwipeHeight > birdHeight)) {
    isFall = true;
    lastTime = currTime;
  }
}

void checkScoreAndCollision() {
  bool scored = false, collisioned = false, vertCollision;
  double nearEdge, farEdge;
  double topEdge = birdHeight - birdR;
  double bottomEdge = birdHeight + birdR;
  double birdPosPlusR = birdPosition+birdR;
  double birdPosMinR = birdPosition-birdR;
  for (int i = 0; i < pipes.length; ++i) {
    // Check Collision
    nearEdge = pipes.elementAt(i)['center'] - pipeWidth/2;
    farEdge = pipes.elementAt(i)['center'] + pipeWidth/2;
    vertCollision = (pipes.elementAt(i)['top'] > topEdge || pipes.elementAt(i)['top']+pipeHeight < bottomEdge);
    if (!collisioned && nearEdge < birdPosPlusR && farEdge > birdPosMinR && vertCollision) {
      gameLoose();
      collisioned = true;
    }
    // Check Score
    if (!scored && !pipes.elementAt(i)['checked']) {
      if (pipes.elementAt(i)['center'] < birdPosition) {
        audio.play("point");
        pipes.elementAt(i)['checked'] = true;
        gameScore++;
        scored = true;
      }
    }
    if (collisioned && scored) break;
  }
}

void movePipes() {
  for (int i = 0; i < pipes.length; ++i) {
    pipes.elementAt(i)['center'] -= pipeSpeed;
  }
}

void garbageRegenPipes(double time) {
  if (!loose && time - garbageLastTime > garbageFreq) {
    int deletedPipesCount = 0;
    // Delete pipes
    for (int i = 0; i < pipes.length; ++i) {
      if (pipes.elementAt(i)['center'] + pipeWidth < .0) {
        pipes.remove(pipes.elementAt(i));
        deletedPipesCount++;
        --i;
      }
    }
    double max = h - h*groundHeight - pipeHeight - pipeGap;
    int i;
    // Generate new pipes
    for (i = 0; i < deletedPipesCount; ++i) {
      generateNewPipe(pipes.length, max);
    }
    print("Deleted pipes: $deletedPipesCount");
    print("Generated pipes: $i");
    garbageLastTime = time;
  }
}

void animBackground() {
//  backgroundAnim += backgroundSpeed;
  groundAnim += pipeSpeed;
//  if (backgroundAnim >= 288.0) backgroundAnim = .0;
  if (groundAnim >= 336.0) groundAnim = .0;
}

void animBird() {
  // Bird angle
  if (!isFall && birdAnimAngle > -60.0) {
    if (birdAnimAngle > .0) birdAnimAngle = .0;
    birdAnimAngle -= 8.0;
    birdAngelBackwise = true;
  }
  if (lastBirdHeight < birdHeight && isFall && birdAnimAngle < 90.0) {
    birdAnimAngle += 4.0 /* (currTime - lastTime)*/;
    birdAngelBackwise = false;
    if (birdAnimAngle > 90.0) birdAnimAngle = 90.0;
  }
  if (!birdAngelBackwise && birdAnimAngle < 0.0) birdAnimAngle += 8.0;
  if (birdAnimAngle <= -60.0) birdAngelBackwise = false;
  // Bird base animation
  if (birdAnimAngle > 10.0) {
    birdAnimState = 2;
    return;
  }
  if (currTime - birdAnimTime > 75) {
    birdAnimTime = currTime;
    birdAnimState++;
    if (birdAnimState == 3) birdAnimState = 0;
  }
}

/* ### Draw Functions ### */

void swapBuff() {
  realCtx.clearRect(0, 0, w, h);
  realCtx.drawImage(canv, 0, 0);
}

void drawFps(int fps) {
  ctx.beginPath();
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(10, 10, 50, 24);
  ctx.fillStyle = "#000000";
  ctx.font = "15px Arial";
  ctx.fillText("$fps fps", 15, 26);
  ctx.closePath();
}

void drawBackground() {
  ctx.beginPath();
  ctx.setFillColorRgb(backgroundColor[0], backgroundColor[1], backgroundColor[2]);
  ctx.fillRect(0, 0, w, h);
  ctx.drawImage(textures[backgroundTexture], backgroundAnim, h-h*groundHeight-402);
  ctx.closePath();
}

void drawBird(double x, double y, [int R = 10]) {
  ctx.save();
  ctx.beginPath();
  ctx.translate(x, y);
  ctx.rotate(radians(birdAnimAngle));
  ctx.drawImage(textures['$birdTexture$birdAnimState'], -birdRX/2, -birdRY/2);
  ctx.translate(-x, -y);
  ctx.closePath();
  ctx.restore();
}

void drawPipe(double center, int top, int height, [int width = 40]) {
  double left = center - width/2;
  ctx.beginPath();
  ctx.fillStyle = "#00ff00";
  // Top pipe
  ctx.drawImage(textures['${pipeTexture}Top'], left, top-320);
  if (top-320 > 0) {
    ctx.drawImage(textures['${pipeTexture}Filler'], left, top-180-h);
  }
  // Bottom pipe
  ctx.drawImage(textures['${pipeTexture}Bottom'], left, top+height);
  if (top+height+320 < h-h*groundHeight) {
    ctx.drawImage(textures['${pipeTexture}Filler'], left, top+height+320);
  }
  ctx.closePath();
}

void drawEarth([double height = 125.0]) {
  double hy = h-height;
  ctx.beginPath();
  ctx.fillStyle = "#ded895";
  ctx.fillRect(0, hy, w, height);
  ctx.drawImage(textures['ground'], -groundAnim, hy);
  ctx.closePath();
}

void renderPipes() {
  for (int i = 0; i < pipes.length; ++i) {
    if (pipes.elementAt(i)['center']+pipeWidth > 0 && pipes.elementAt(i)['center']-pipeWidth < w)
      drawPipe(pipes.elementAt(i)['center'], pipes.elementAt(i)['top'], pipeHeight, pipeWidth);
    if (pipes.elementAt(i)['center']-pipeWidth > w) break;
  }
}

void drawScore() {
  double x = w/2, y = h*1/6;
  ctx.beginPath();
  ctx.font = "60px Arial";
  ctx.fillStyle = "#000000";
  ctx.fillText(gameScore.toString(), x+2, y+2);
  ctx.fillText(gameScore.toString(), x-2, y-2);
  ctx.fillText(gameScore.toString(), x+2, y-2);
  ctx.fillText(gameScore.toString(), x-2, y+2);
  ctx.fillStyle = "#ffffff";
  ctx.fillText(gameScore.toString(), x, y);
  ctx.closePath();
}

void drawPopup() {
  double x = w/2, y = h/2, offsetX = 400.0, offsetY = 200.0;
  ctx.beginPath();
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(x-offsetX/2, y-offsetY/2, offsetX, offsetY);
  ctx.fillStyle = "#000000";
  ctx.font = "60px Arial";
  if (!loose) {
    ctx.fillText(popupMsg, x - offsetX/2+2*popupMsg.length, y-20);
    String say2 = "Space or Click to fly!";
    ctx.font = "30px Arial";
    ctx.fillText(say2, x - offsetX/2+2*say2.length+25, y+40);
    ctx.font = "20px Arial";
    ctx.fillText("Change dufficulty: [0-4]", x - offsetX/2+5*say2.length, y+80);
  } else {
    ctx.fillText("Score: $gameScore", x - offsetX/2+100-7*gameScore.toString().length-1, y-40);
    ctx.font = "40px Arial";
    ctx.fillText("Difficulty: $popupMsg", x - offsetX/2+110, y+30);
    String say2 = "Space or Click to start again!";
    ctx.font = "30px Arial";
    ctx.fillText(say2, x - offsetX/2+10, y+80);
  }
  ctx.strokeRect(x-offsetX/2, y-offsetY/2, offsetX, offsetY);
  ctx.closePath();
}

void drawSplash() {
  if (splashValue > .0 || splashReset) {
    ctx.setFillColorRgb(splashInfo[0], splashInfo[1], splashInfo[2], splashValue);
    ctx.fillRect(0, 0, w, h);
    if (resetToHigh) {
      if (splashValue < 1.0 - splashInfo[3]) splashValue += splashInfo[3];
      else {
        resetToHigh = false;
        resetGame();
      }
    } else {
      if (splashValue > splashInfo[3]*2) splashValue -= splashInfo[3];
      else {
        splashValue = .0;
        if (splashReset) {
          splashReset = false;
//          stratGame();
        }
      }
    }
  }
}

/* ### Helpers ### */

void initRender() {
  querySelector("#fullscreen").onClick.listen(goFullScreen);
  realCanv = querySelector("#render_area");
  realCtx = realCanv.getContext("2d");
  canv = new CanvasElement();
  ctx = canv.getContext("2d");
  bufferCanv = document.createElement('canvas');
  bufferCtx = bufferCanv.getContext("2d");
  if (realCtx == null || ctx == null || bufferCtx == null)
    throw new Exception("Failed to get 2D context!");
  realCtx.imageSmoothingEnabled = true;
  ctx.imageSmoothingEnabled = true;
  bufferCtx.imageSmoothingEnabled = true;
  resize();
  initTextures();
  respawnTextures();
  img.onLoad.listen(prepareTextures);
  window.onKeyPress.listen(clickBird);
  if (isDesktopBrowser()) {
    realCanv.onClick.listen(clickBird);
  } else {
    realCanv.onTouchStart.listen(gameTouchStart);
//    realCanv.onTouchEnd.listen(gameTouchEnd);
  }
  window.onResize.listen(resize);
}

void initAudio() {
  audio = new Audio(audioLoaded);
}

void audioLoaded() {
  initRender();
  generatePipes();
  tick(.0);
}

bool isDesktopBrowser() {
  print("Browser is: $browser");
  Browser b = browser;
  return (b.isChrome || b.isFirefox || b.isIe || b.isOpera || b.isSafari);
}

void goFullScreen(Event e) {
  realCanv.requestFullscreen();
}

void initTextures() {
  textures.putIfAbsent('backgroundDay', () => new CanvasElement());
  textures.putIfAbsent('backgroundNight', () => new CanvasElement());
  textures.putIfAbsent('ground', () => new CanvasElement());
  textures.putIfAbsent('birdYellow0', () => new CanvasElement());
  textures.putIfAbsent('birdYellow1', () => new CanvasElement());
  textures.putIfAbsent('birdYellow2', () => new CanvasElement());
  textures.putIfAbsent('birdBlue0', () => new CanvasElement());
  textures.putIfAbsent('birdBlue1', () => new CanvasElement());
  textures.putIfAbsent('birdBlue2', () => new CanvasElement());
  textures.putIfAbsent('birdRed0', () => new CanvasElement());
  textures.putIfAbsent('birdRed1', () => new CanvasElement());
  textures.putIfAbsent('birdRed2', () => new CanvasElement());
  textures.putIfAbsent('pipeGreenTop', () => new CanvasElement());
  textures.putIfAbsent('pipeGreenBottom', () => new CanvasElement());
  textures.putIfAbsent('pipeGreenFiller', () => new CanvasElement());
  textures.putIfAbsent('pipeRedTop', () => new CanvasElement());
  textures.putIfAbsent('pipeRedBottom', () => new CanvasElement());
  textures.putIfAbsent('pipeRedFiller', () => new CanvasElement());
}

void prepareTextures([Event e]) {
  print("Textures chached!");
  textures.clear();
  // Prepare background (sky)
  textures.putIfAbsent('backgroundDay', () => setBufferFromTexture(0, 0, 288, 512, "repeat-x", w+288, 512));
  textures.putIfAbsent('backgroundNight', () => setBufferFromTexture(292, 0, 288, 512, "repeat-x", w+288, 512));
  // Prepare ground
  textures.putIfAbsent('ground', () => setBufferFromTexture(584, 0, 336, 112, "repeat-x", w+336, 112));
  // Prepare birdYellow
  textures.putIfAbsent('birdYellow0', () => setBufferFromTexture(6, 982, 34, 24));
  textures.putIfAbsent('birdYellow1', () => setBufferFromTexture(62, 982, 34, 24));
  textures.putIfAbsent('birdYellow2', () => setBufferFromTexture(118, 982, 34, 24));
  // Prepare birdYellow
  textures.putIfAbsent('birdBlue0', () => setBufferFromTexture(174, 982, 34, 24));
  textures.putIfAbsent('birdBlue1', () => setBufferFromTexture(230, 658, 34, 24));
  textures.putIfAbsent('birdBlue2', () => setBufferFromTexture(230, 710, 34, 24));
  // Prepare birdRed
  textures.putIfAbsent('birdRed0', () => setBufferFromTexture(230, 762, 34, 24));
  textures.putIfAbsent('birdRed1', () => setBufferFromTexture(230, 814, 34, 24));
  textures.putIfAbsent('birdRed2', () => setBufferFromTexture(230, 866, 34, 24));
  // Prepare green pipe
  textures.putIfAbsent('pipeGreenTop', () => setBufferFromTexture(112, 646, 52, 320));
  textures.putIfAbsent('pipeGreenBottom', () => setBufferFromTexture(168, 646, 52, 320));
  textures.putIfAbsent('pipeGreenFiller', () => setBufferFromTexture(112, 646, 52, 294, "repeat-y", 52, h));
  // Prepare red pipe
  textures.putIfAbsent('pipeRedTop', () => setBufferFromTexture(0, 646, 52, 320));
  textures.putIfAbsent('pipeRedBottom', () => setBufferFromTexture(56, 646, 52, 320));
  textures.putIfAbsent('pipeRedFiller', () => setBufferFromTexture(0, 646, 52, 294, "repeat-y", 52, h));
  respawnTextures();
}

void resizeTextures(int w, int h) {
  textures['backgroundDay']= setBufferFromTexture(0, 0, 288, 512, "repeat-x", w, 512);
  textures['backgroundNight'] = setBufferFromTexture(292, 0, 288, 512, "repeat-x", w, 512);
  textures['ground'] = setBufferFromTexture(584, 0, 336, 112, "repeat-x", w+336, 112);
  textures['pipeGreenFiller'] = setBufferFromTexture(112, 646, 52, 294, "repeat-y", 52, h);
  textures['pipeRedFiller'] = setBufferFromTexture(0, 646, 52, 294, "repeat-y", 52, h);
}

CanvasElement setBufferFromTexture(int x, int y, int width, int height, [String repeat, int rX, int rY]) {
  CanvasElement buf = new CanvasElement();
  CanvasRenderingContext2D bufCtx = buf.getContext("2d");
  if (bufCtx == null)
    throw new Exception("Failed to get 2D context for texture buffer!");
  bufCtx.imageSmoothingEnabled = true;
  buf.width = (repeat != null) ? rX : width;
  buf.height = (repeat != null) ? rY : height;
  if (repeat != null) {
    bufferCanv.width = width;
    bufferCanv.height = height;
    bufferCtx.clearRect(0, 0, width, height);
    bufferCtx.drawImageScaledFromSource(img, x, y, width, height, 0, 0, width, height);
    bufCtx.rect(0, 0, rX, rY);
    bufCtx.fillStyle = bufCtx.createPattern(bufferCanv, repeat);
    bufCtx.fill();
  } else {
    bufCtx.drawImageScaledFromSource(img, x, y, width, height, 0, 0, width, height);
  }
  return buf;
}

void resize([Event e]) {
  w = window.innerWidth;
  h = window.innerHeight;
  aspect = w / h;
  realCanv.width = w;
  realCanv.height = h;
  canv.width = w;
  canv.height = h;
  birdPosition = w*1/4;
  print("Render size: ${w}x$h");
  // Recreate textures with new size
  resizeTextures(w, h);
}

void clickBird(Event e) {
  e.preventDefault();
  if (e.type == "click") {
    if (gameState & (STARTED | READY & ~LOOSE) == STARTED | READY & ~LOOSE) {
      swipeBird();
    } else {
      if ((loose && currTime - pauseAfterLoose < timeAfterLoose) || resetToHigh)
        return;
      if (gameState & STARTED == STARTED)
        resetWithSplash();
      else
        stratGame();
    }
  } else if (e.type == "keypress") {
      KeyboardEvent kbe = e;
      switch (kbe.keyCode) {
        // Space
        case 32:
          if (gameState & (STARTED | READY & ~LOOSE) == STARTED | READY & ~LOOSE) {
            swipeBird();
          } else {
            if ((loose && currTime - pauseAfterLoose < timeAfterLoose) || resetToHigh)
              return;
            if (gameState & STARTED == STARTED)
              resetWithSplash();
            else
              stratGame();
          }
          break;
        // Esc
        case 27:
          //gameTogglePause();
          break;
        // 0
        case 48:
          changeGameLevel(0);
          break;
        // 1
        case 49:
          changeGameLevel(1);
          break;
        // 2
        case 50:
          changeGameLevel(2);
          break;
        // 3
        case 51:
          changeGameLevel(3);
          break;
        // 4
        case 52:
          changeGameLevel(4);
          break;
      }
  }
}

void stratGame() {
  setGameState(STARTED | READY & ~LOOSE);
  swipeBird();
}

void swipeBird() {
  audio.play("wing");
  isFall = false;
  lastBirdHeight = birdHeight;
  lastTime = currTime;
}

void generatePipes([int count = 20]) {
  if (count < 1) throw new Exception("Invalid argument!");
  if (pipes != null) pipes.clear();
  double max = h - h*groundHeight - pipeHeight - pipeGap;
  for (int i = 0; i < count; ++i) {
    generateNewPipe(i, max);
  }
}

void generateNewPipe(int i, double max) {
  int top, previewTop;
  double previewCenter, topMin, topMax;
  Map<String, dynamic> pipe = new Map<String, dynamic>();
  pipe.putIfAbsent('checked', () => false);
  if (i == 0) {
    pipe.putIfAbsent('center', () => w/2 + i * (pipeDistance + pipeWidth));
    top = randMinMax(pipeGap, max);
  } else {
    previewCenter = pipes.elementAt(i-1)['center'];
    pipe.putIfAbsent('center', () => previewCenter + pipeWidth + pipeDistance);
    previewTop = pipes.elementAt(i-1)['top'];
    topMin = (previewTop - pipeRange).toDouble();
    topMax = (previewTop + pipeRange).toDouble();
    // Sky
    if (topMin < pipeGap) {
      topMin = pipeGap.toDouble();
    }
    // Ground
    if (topMax + pipeHeight > max) {
      topMax = max;
    }
    top = randMinMax(topMin.toInt(), topMax);
  }
  pipe.putIfAbsent('top', () => top);
  pipes.add(pipe);
}

int randMinMax(int min, double max) {
  return (min + rnd.nextInt(max.toInt() - min));
}

double radians(num degrees) {
    return degrees * PI / 180.0;
}

void respawnTextures() {
  backgroundTexture = (randMinMax(0, 2.0) == 0) ? "backgroundDay" : "backgroundNight";
  pipeTexture = (randMinMax(0, 2.0) == 0) ? "pipeGreen" : "pipeRed";
  switch (randMinMax(0, 3.0)) {
    case 0:
      birdTexture = "birdYellow";
      break;
    case 1:
      birdTexture = "birdBlue";
      break;
    case 2:
      birdTexture = "birdRed";
      break;
  }
  ImageData iData = textures[backgroundTexture].getContext("2d").getImageData(0, 0, 1, 1);
  backgroundColor = iData.data;
}

/* ### Game Handlers ###*/

void resetGame() {
  birdHeight = h*1/3;
  birdAnimAngle = .0;
  birdAngelBackwise = true;
  gameScore = 0;
  pauseAfterLoose = currTime;
  garbageLastTime = currTime;
  loose = false;
  if (!levelChanged) {
    generatePipes();
  }
  respawnTextures();
  levelChanged = false;
  popupMsg = "Click to play!";
  gameState = 0;
}

void resetWithSplash() {
  splashReset = true;
  resetToHigh = true;
  splashValue = .0;
  splashInfo = [0, 0, 0, .02];
}

void gameLoose() {
  audio.play("hit", "die");
  unSetGameState(READY | LOOSE);
  loose = true;
  pauseAfterLoose = currTime;
  popupMsg = gameLevel.toString();
  splashValue = 1.0;
  splashInfo = [255, 255, 255, .05];
}

void gameTogglePause() {
  if (gameState & STARTED == STARTED) unSetGameState(STARTED);
  else setGameState(STARTED);
}

void changeGameLevel(int lvl) {
  if (gameState & (STARTED | READY & ~LOOSE) != STARTED | READY & ~LOOSE) {
    gameLevel = lvl;
    pipeRange = gameLevel * 50 + 1;
    levelChanged = true;
    birdHeight = h*1/3;
    birdAnimAngle = .0;
    generatePipes();
  }
}

void gameTouchStart(Event e) {
  e.preventDefault();
//  if (!gameIsTouch)
    swipeBird();
  gameIsTouch = true;
}

void gameTouchEnd(Event e) {
  e.preventDefault();
  gameIsTouch = false;
}
