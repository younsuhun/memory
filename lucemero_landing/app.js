document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('waitlist-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        
        if (email) {
            // Here you would normally send the email to your backend or API (like Stibee, Mailchimp)
            // For now, we simulate a successful submission
            
            const btn = form.querySelector('.btn-primary');
            const originalText = btn.textContent;
            
            btn.textContent = '신청 완료! 🎉';
            btn.style.backgroundColor = '#2eab5b';
            
            setTimeout(() => {
                form.reset();
                btn.textContent = originalText;
                btn.style.backgroundColor = 'var(--accent-color)';
                alert('신청해주셔서 감사합니다! 8월 정식 출시 전 안내 메일을 보내드릴게요.');
            }, 3000);
        }
    });
});
