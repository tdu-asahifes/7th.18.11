if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
  // PC用javascript
  (function() {
    'use strict';
      //resize reload
      //window.onresize = function(){
        //location.reload()
      //};
  
    window.addEventListener('load', init);
    function init(){
      // 描画領域
      const width = 960;
      const height = 540;
      const count = 100;
      let rot = 0;
      let box;
  
      // 3d表示用のレンダラーを作成
      const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#stage'),
        alpha: true // 背景を透明にする
      });
      // Retinaに対応させる魔法の一文!
      renderer.setPixelRatio(window.devicePixelRatio);
      // 描画領域の設定
      renderer.setSize(width, height);
  
      // シーンの作成
      const scene = new THREE.Scene();
  
      // カメラを作成
      // THREE.PerspectiveCamera(画角, アスペクト比);
      const camera = new THREE.PerspectiveCamera(45, width / height);
  
      // 平行光源
      const light = new THREE.DirectionalLight(0xffffff, 2);
      light.position.x = 100;
      light.position.y = 85;
      light.position.z = 50;
      scene.add(light);
  
  
      for (let i = 0; i < count; i++) {
        const size = Math.random() * 20 + 10;
        const geometry = new THREE.BoxGeometry(size, size, size);
        const material = new THREE.MeshToonMaterial({color: Math.random() * 0xffffff});
        box = new THREE.Mesh(geometry, material);
  
        box.position.set(
            Math.random() * 200 - 100,
            Math.random() * 200 - 100,
            Math.random() * 200 - 100
        );
        scene.add(box);
      }
  
  
      // アニメーション
      // 初回起動
      tick();
  
      function tick() {
        rot += 0.1;
        const radian = rot * Math.PI / 180;
        camera.position.x = 500 * Math.sin(radian);
        camera.position.z = 500 * Math.cos(radian);
        camera.position.y = 100;
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        // レンダリング
        renderer.render(scene, camera);
        requestAnimationFrame(tick);
      }
    }
  
  })();
  }
 

