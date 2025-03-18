document.addEventListener("DOMContentLoaded", () => {
  // Ambil elemen canvas
  const canvas = document.getElementById("three-js-canvas");

  // Inisialisasi Three.js
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.z = 5;

  // Membuat bola wireframe 3D
  const geometry = new THREE.SphereGeometry(1.5, 32, 32);
  const material = new THREE.MeshStandardMaterial({ color: 0x00ffcc, wireframe: true });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  // Menambahkan cahaya
  const light = new THREE.PointLight(0xffffff, 1.2, 100);
  light.position.set(2, 3, 4);
  scene.add(light);

  // Animasi bola 3D
  function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();

  // Responsif saat resize
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Pastikan efek 3D tetap di belakang konten
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.zIndex = "-1";
});
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".navbar ul");

  // Toggle menu saat tombol ☰ diklik
  menuToggle.addEventListener("click", function (event) {
    event.stopPropagation(); // Mencegah klik ini menutup menu langsung
    navLinks.classList.toggle("active");
  });

  // Klik di luar menu untuk menutup navbar
  document.addEventListener("click", function (event) {
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
      navLinks.classList.remove("active");
    }
  });
});
