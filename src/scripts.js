// scripts.js for Marketing Made Smarter - SaaS Platform
// Place all JavaScript from <script> tags here (except Tailwind and CDN links)
document.addEventListener('DOMContentLoaded', function() {
  // --- GET STARTED PAGE LOGIC ---
  const dropdown1 = document.getElementById('dropdown1');
  const dropdown2 = document.getElementById('dropdown2');
  const submitBtn = document.getElementById('submit-btn');
  const resetBtn = document.getElementById('reset-btn');
  const resultList = document.getElementById('result-list');
  const logoutBtn = document.getElementById('logout-btn');

  if (dropdown1 && dropdown2 && submitBtn && resetBtn && resultList) {
    dropdown1.addEventListener('change', function() {
      dropdown2.disabled = false;
      dropdown2.classList.add('active');
      dropdown2.value = '';
      submitBtn.disabled = true;
      submitBtn.classList.remove('enabled');
      submitBtn.classList.add('disabled');
      resultList.classList.add('hidden');
    });
    dropdown2.addEventListener('change', function() {
      if (dropdown1.value && dropdown2.value) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('disabled');
        submitBtn.classList.add('enabled');
      } else {
        submitBtn.disabled = true;
        submitBtn.classList.remove('enabled');
        submitBtn.classList.add('disabled');
      }
    });
    submitBtn.addEventListener('click', function(e) {
      e.preventDefault();
      if (dropdown1.value && dropdown2.value) {
        resultList.innerHTML = `<div class="mb-2">You selected:</div><ul class="list-disc pl-6"><li><b>First Option:</b> ${dropdown1.options[dropdown1.selectedIndex].text}</li><li><b>Second Option:</b> ${dropdown2.options[dropdown2.selectedIndex].text}</li></ul>`;
        resultList.classList.remove('hidden');
      }
    });
    resetBtn.addEventListener('click', function() {
      dropdown1.value = '';
      dropdown2.value = '';
      dropdown2.disabled = true;
      dropdown2.classList.remove('active');
      submitBtn.disabled = true;
      submitBtn.classList.remove('enabled');
      submitBtn.classList.add('disabled');
      resultList.classList.add('hidden');
    });
  }
  // Logout logic
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  }

  // --- LANDING PAGE LOGIC ---
  const getStartedBtn = document.querySelector('.btn-hover');
  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = 'get-started.html';
    });
  }

  // Animate chat messages in Features section
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.chat-message').forEach(message => {
    observer.observe(message);
  });

  // Animate stats numbers
  const stats = document.querySelectorAll('.stat-number');
  function animateNumber(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const interval = duration / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.round(current);
    }, interval);
  }
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target);
        animateNumber(entry.target, target);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  stats.forEach(stat => statsObserver.observe(stat));

  // FAQ toggle
  const faqButtons = document.querySelectorAll('.faq-button');
  faqButtons.forEach(button => {
    button.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const icon = this.querySelector('.faq-icon');
      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.classList.remove('ri-add-line');
        icon.classList.add('ri-subtract-line');
      } else {
        content.classList.add('hidden');
        icon.classList.remove('ri-subtract-line');
        icon.classList.add('ri-add-line');
      }
    });
  });

  // Analytics chart
  const chartContainer = document.getElementById('analytics-chart');
  if (chartContainer && window.echarts) {
    const chart = echarts.init(chartContainer);
    const option = {
      animation: false,
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        textStyle: { color: '#1f2937' }
      },
      grid: { top: 10, right: 10, bottom: 20, left: 40 },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        axisLine: { lineStyle: { color: '#4b5563' } },
        axisLabel: { color: '#9ca3af' }
      },
      yAxis: {
        type: 'value',
        axisLine: { lineStyle: { color: '#4b5563' } },
        splitLine: { lineStyle: { color: '#374151' } },
        axisLabel: { color: '#9ca3af' }
      },
      series: [
        {
          name: 'Engagement',
          type: 'line',
          smooth: true,
          data: [120, 132, 101, 134, 90, 180],
          lineStyle: { color: 'rgba(87, 181, 231, 1)' },
          itemStyle: { color: 'rgba(87, 181, 231, 1)' },
          showSymbol: false,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(87, 181, 231, 0.3)' },
              { offset: 1, color: 'rgba(87, 181, 231, 0.1)' }
            ])
          }
        },
        {
          name: 'Conversions',
          type: 'line',
          smooth: true,
          data: [220, 182, 191, 234, 290, 330],
          lineStyle: { color: 'rgba(141, 211, 199, 1)' },
          itemStyle: { color: 'rgba(141, 211, 199, 1)' },
          showSymbol: false,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(141, 211, 199, 0.3)' },
              { offset: 1, color: 'rgba(141, 211, 199, 0.1)' }
            ])
          }
        }
      ]
    };
    chart.setOption(option);
    window.addEventListener('resize', function() {
      chart.resize();
    });
  }

  // Chatbot widget
  const chatbotButton = document.getElementById('chatbot-button');
  const chatWindow = document.getElementById('chat-window');
  const closeChat = document.getElementById('close-chat');
  const chatInput = document.getElementById('chat-input');
  const sendMessage = document.getElementById('send-message');
  const chatMessages = document.getElementById('chat-messages');
  function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = isUser ? 'chat-message-user flex items-start justify-end' : 'chat-message-bot flex items-start';
    const messageContent = `
      <div class="bg-${isUser ? 'primary' : 'gray-800'} rounded-lg p-3 max-w-[80%]">
        <p class="text-sm">${message}</p>
      </div>
    `;
    messageDiv.innerHTML = messageContent;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  if (chatbotButton && chatWindow && closeChat && chatInput && sendMessage && chatMessages) {
    chatbotButton.addEventListener('click', function() {
      chatWindow.classList.remove('hidden');
      chatbotButton.classList.add('hidden');
      if (!chatWindow.classList.contains('hidden')) {
        chatInput.focus();
      }
    });
    closeChat.addEventListener('click', function() {
      chatWindow.classList.add('hidden');
      chatbotButton.classList.remove('hidden');
    });
    function handleSendMessage() {
      const message = chatInput.value.trim();
      if (message) {
        addMessage(message, true);
        chatInput.value = '';
        setTimeout(() => {
          addMessage("Thanks for your message! Our team will get back to you soon.");
        }, 1000);
      }
    }
    sendMessage.addEventListener('click', handleSendMessage);
    chatInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        handleSendMessage();
      }
    });
  }

  // --- SCREENSHOT PAGE LOGIC ---
  const category = document.getElementById('category');
  const item = document.getElementById('item');
  const submitBtn2 = document.getElementById('submit-btn');
  const resetBtn2 = document.getElementById('reset-btn');
  const resultList2 = document.getElementById('result-list');

  // Category to items mapping
  const itemsMap = {
    fruits: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' }
    ],
    colors: [
      { value: 'red', label: 'Red' },
      { value: 'blue', label: 'Blue' },
      { value: 'green', label: 'Green' }
    ],
    animals: [
      { value: 'cat', label: 'Cat' },
      { value: 'dog', label: 'Dog' },
      { value: 'lion', label: 'Lion' }
    ]
  };

  if (category && item && submitBtn2 && resetBtn2 && resultList2) {
    category.addEventListener('change', function() {
      // Populate item dropdown
      item.innerHTML = '<option value="" selected disabled>Select an item...</option>';
      if (itemsMap[category.value]) {
        itemsMap[category.value].forEach(opt => {
          const option = document.createElement('option');
          option.value = opt.value;
          option.textContent = opt.label;
          item.appendChild(option);
        });
        item.disabled = false;
      } else {
        item.disabled = true;
      }
      item.value = '';
      submitBtn2.disabled = true;
      resultList2.style.display = 'none';
    });
    item.addEventListener('change', function() {
      if (category.value && item.value) {
        submitBtn2.disabled = false;
      } else {
        submitBtn2.disabled = true;
      }
    });
    submitBtn2.addEventListener('click', function(e) {
      e.preventDefault();
      if (category.value && item.value) {
        resultList2.innerHTML = `<b>Selected Category:</b> ${category.options[category.selectedIndex].text}<br><b>Selected Item:</b> ${item.options[item.selectedIndex].text}`;
        resultList2.style.display = 'block';
      }
    });
    resetBtn2.addEventListener('click', function() {
      category.value = '';
      item.value = '';
      item.disabled = true;
      submitBtn2.disabled = true;
      resultList2.style.display = 'none';
      item.innerHTML = '<option value="" selected disabled>Select an item...</option>';
    });
  }

  // Profile dropdown logic
  const profileBtn = document.getElementById('profile-btn');
  const profileDropdown = document.getElementById('profile-dropdown');
  if (profileBtn && profileDropdown) {
    profileBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      profileDropdown.style.display = (profileDropdown.style.display === 'block') ? 'none' : 'block';
    });
    document.addEventListener('click', function(e) {
      if (profileDropdown.style.display === 'block') {
        profileDropdown.style.display = 'none';
      }
    });
    profileDropdown.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
});
