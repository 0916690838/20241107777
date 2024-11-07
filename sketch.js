let font;
let points = [];

function preload() {
  font = loadFont("font/kiki.ttf"); //路徑打錯了 fonts 要改成 font
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#F299A9");

  // 計算行數和列數 (可以根據需要調整)
  let rows = floor(height / 50);
  let cols = floor(width / 50);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      // 計算笑臉的位置
      let faceX = 25 + 50 * x;
      let faceY = 25 + 50 * y;

      // 計算滑鼠與笑臉中心點的向量，用於計算旋轉角度
      let angle = atan2(mouseY - faceY, mouseX - faceX);

      // 將座標系原點移到笑臉中心點，並旋轉畫布
      push();
      translate(faceX, faceY);
      rotate(angle);

      // 繪製笑臉
      stroke(1); //新增框線 否則會被下方文字的 noStroke 影響 無法顯示笑臉
      fill("#F299A9");
      ellipse(0, 0, 50);
      fill(0); // 黑色眼睛
      ellipse(-10, -10, 5);
      ellipse(10, -10, 5);
      noFill();
      arc(0, 10, 30, 15, 0, PI / 2); // 微笑

      // 恢復座標系
      pop();
    }
  }

  //把字型變成點數
  points = font.textToPoints("KIKI", width / 2 - 300, height / 2 + 100, 200, {
    sampleFactor: 0.1,
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小

  //利用迴圈顯示出數字編號
  for (let i = 0; i < points.length; i++) {
    // text(str(i),points[i].x,points[i].y) //顯示數字
    noStroke();
    fill("#730202");
    ellipse(points[i].x, points[i].y, 15);
  }
}
