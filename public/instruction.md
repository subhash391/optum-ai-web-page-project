<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Marketing Made Smarter - SaaS Platform</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css" rel="stylesheet">
<script src="https://cdn.tailwindcss.com/3.4.16"></script>
<script>tailwind.config={theme:{extend:{colors:{primary:'#8b5cf6',secondary:'#ec4899'},borderRadius:{'none':'0px','sm':'4px',DEFAULT:'8px','md':'12px','lg':'16px','xl':'20px','2xl':'24px','3xl':'32px','full':'9999px','button':'8px'}}}}</script>
<style>
:where([class^="ri-"])::before { content: "\f3c2"; }
@keyframes gradientFlow {
0% { background-position: 0% 50%; }
50% { background-position: 100% 50%; }
100% { background-position: 0% 50%; }
}
.gradient-bg {
background: linear-gradient(-45deg, #5727b0, #8b5cf6, #ec4899, #3b82f6);
background-size: 400% 400%;
animation: gradientFlow 15s ease infinite;
}
.gradient-text {
background: linear-gradient(90deg, #8b5cf6, #ec4899);
-webkit-background-clip: text;
background-clip: text;
color: transparent;
}
.card-hover {
transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-hover:hover {
transform: translateY(-5px);
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.btn-hover {
transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.btn-hover:hover {
transform: scale(1.05);
box-shadow: 0 10px 15px -3px rgba(139, 92, 246, 0.3), 0 4px 6px -2px rgba(139, 92, 246, 0.2);
}
input:focus {
outline: none;
}
<style>
@keyframes bounce {
0%, 100% { transform: translateY(0); }
50% { transform: translateY(-10px); }
}
@keyframes slideIn {
from { transform: scale(0.8); opacity: 0; }
to { transform: scale(1); opacity: 1; }
}
@keyframes fadeIn {
from { opacity: 0; }
to { opacity: 1; }
}
.chatbot-widget {
animation: bounce 3s ease-in-out infinite;
}
.chatbot-widget:hover {
animation: none;
transform: scale(1.1);
transition: transform 0.3s ease;
}
.chat-window {
animation: slideIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
transform-origin: bottom right;
}
.chat-message-bot {
animation: fadeIn 0.5s ease-out;
}
.chat-message-user {
animation: fadeIn 0.5s ease-out;
}
</style>
</head>
<body class="bg-black text-white min-h-screen relative">
<!-- Hero Section with Gradient Background -->
<div class="relative min-h-screen overflow-hidden">
<div class="absolute inset-0 z-0" style="background-image: url('https://readdy.ai/api/search-image?query=abstract%20digital%20fluid%20gradient%20wave%20with%20blue%2C%20purple%2C%20and%20magenta%20colors%20flowing%20like%20liquid%20on%20black%20background%2C%20elegant%20modern%20technology%20visualization%2C%20high%20resolution%2C%20no%20text%2C%20minimalist%20design&width=1920&height=1080&seq=hero123&orientation=landscape'); background-size: cover; background-position: center;"></div>
<div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
<!-- Navigation -->
<nav class="fixed w-full top-0 left-0 z-50 px-6 py-4">
<div class="max-w-6xl mx-auto">
<div class="bg-white/10 backdrop-blur-md rounded-full border border-white/10 shadow-lg shadow-black/5 px-6 py-3 flex items-center justify-between">
<a href="#" class="flex items-center">
<span class="text-2xl font-['Pacifico'] text-white">logo</span>
</a>
<div class="hidden md:flex-1 md:flex items-center justify-center space-x-8">
<div class="flex items-center space-x-8">
<a href="#" class="text-white hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300">Home</a>
<a href="#" class="text-white hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300">About</a>
</div>
</div>
<a href="#" class="hidden md:inline-block px-8 py-2.5 bg-gradient-to-r from-primary/80 to-secondary/80 hover:from-primary hover:to-secondary rounded-full text-white font-medium transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:scale-105">Get Started</a>
<button class="md:hidden w-10 h-10 flex items-center justify-center text-white">
<i class="ri-menu-line ri-lg"></i>
</button>
</div>
</div>
</nav>
<!-- Hero Content -->
<div class="relative z-20 flex flex-col items-center justify-center px-6 py-24 text-center h-screen">
<span class="text-primary font-medium mb-4">AI-POWERED ERROR LOGGING PLATFORM</span>
<h1 class="text-5xl md:text-7xl font-bold mb-8 max-w-5xl leading-tight">Transforming APIs Development with <span class="gradient-text">Intelligent Automation</span></h1>
<p class="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl">Scale your development with AI-driven error detection, automated logging, and intelligent debugging that resolves issues 10x faster.</p>
<div class="flex flex-col sm:flex-row items-center gap-4">
<a href="#" class="btn-hover bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white text-xl font-medium px-16 py-5 rounded-[100px] shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap">Get Started</a>
</div>
<div class="flex items-center gap-8 mt-12">
<div class="flex -space-x-4">
<img src="https://readdy.ai/api/search-image?query=professional%20smiling%20young%20asian%20businesswoman%20headshot%20on%20clean%20white%20background%2C%20studio%20lighting&width=96&height=96&seq=user1&orientation=squarish" alt="User Avatar" class="w-12 h-12 rounded-full border-2 border-white">
<img src="https://readdy.ai/api/search-image?query=professional%20confident%20african%20american%20businessman%20headshot%20on%20clean%20white%20background%2C%20studio%20lighting&width=96&height=96&seq=user2&orientation=squarish" alt="User Avatar" class="w-12 h-12 rounded-full border-2 border-white">
<img src="https://readdy.ai/api/search-image?query=professional%20middle%20aged%20caucasian%20businesswoman%20headshot%20on%20clean%20white%20background%2C%20studio%20lighting&width=96&height=96&seq=user3&orientation=squarish" alt="User Avatar" class="w-12 h-12 rounded-full border-2 border-white">
</div>
<div class="flex items-center gap-2">
<div class="flex items-center">
<i class="ri-star-fill ri-sm text-yellow-400"></i>
<i class="ri-star-fill ri-sm text-yellow-400"></i>
<i class="ri-star-fill ri-sm text-yellow-400"></i>
<i class="ri-star-fill ri-sm text-yellow-400"></i>
<i class="ri-star-fill ri-sm text-yellow-400"></i>
</div>
<p class="text-gray-300">Trusted by Optum Payer teams</p>
</div>
</div>
</div>
</div>

</body>
</html>