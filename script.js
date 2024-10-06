const notification = document.getElementById('notification'); const closeBtn = document.getElementById('close-btn'); const siteTitle = document.querySelector('.site-title'); const notificationText = document.querySelector('#notification p'); window.onload = () => { const currentHour = new Date().getHours(); let greeting = ''; if (currentHour >= 5 && currentHour < 12) { greeting = '早上好'; } else if (currentHour >= 12 && currentHour < 18) { greeting = '下午好'; } else { greeting = '晚上好'; } notificationText.textContent = `${greeting}，欢迎来到butlanys的小站`; notificationText.style.color = 'white'; notification.style.display = 'block'; setTimeout(() => { notification.classList.add('show'); }, 10); setTimeout(() => { notification.classList.remove('show'); setTimeout(() => { notification.style.display = 'none'; }, 500); }, 3000); setTimeout(() => { siteTitle.classList.add('show'); }, 10); }; closeBtn.addEventListener('click', () => { notification.classList.remove('show'); setTimeout(() => { notification.style.display = 'none'; }, 500); });