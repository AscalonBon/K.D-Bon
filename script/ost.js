document.addEventListener('DOMContentLoaded', function() {
        const audio = document.getElementById('bg-music');
        const toggleBtn = document.getElementById('music-toggle');
        const volumeIcon = document.getElementById('volume-icon');
        const volumeSlider = document.getElementById('volume-slider');
        
        console.log('Music script loaded');
        console.log('Audio element:', audio);
        console.log('Toggle button:', toggleBtn);
        
        if (!audio) {
            console.error('Audio element not found!');
            return;
        }
        
        if (!toggleBtn) {
            console.error('Toggle button not found!');
            return;
        }
        
        // Initialize volume
        audio.volume = 0.5;
        if (volumeSlider) {
            volumeSlider.value = audio.volume;
        }
        
        // Update volume icon
        function updateVolumeIcon(vol) {
            if (!volumeIcon) return;
            if (vol === 0) {
                volumeIcon.className = 'fa fa-volume-off';
            } else if (vol < 0.3) {
                volumeIcon.className = 'fa fa-volume-down';
            } else {
                volumeIcon.className = 'fa fa-volume-up';
            }
        }
        
        updateVolumeIcon(audio.volume);
        
        // Toggle play/pause
        toggleBtn.addEventListener('click', function() {
            console.log('Toggle button clicked');
            console.log('Audio paused:', audio.paused);
            
            if (audio.paused) {
                audio.play().then(() => {
                    console.log('Audio playing');
                    updateVolumeIcon(audio.volume);
                }).catch(error => {
                    console.log('Play failed:', error);
                    volumeIcon.className = 'fa fa-play';
                });
            } else {
                audio.pause();
                volumeIcon.className = 'fa fa-volume-off';
            }
        });
        
        // Volume slider
        if (volumeSlider) {
            volumeSlider.addEventListener('input', function() {
                audio.volume = parseFloat(this.value);
                updateVolumeIcon(audio.volume);
                console.log('Volume changed to:', audio.volume);
            });
        }
        
        // Try to play on load (muted for autoplay policy)
        audio.muted = true;
        audio.play().then(() => {
            console.log('Audio auto-played (muted)');
            audio.muted = false;
        }).catch(error => {
            console.log('Autoplay prevented:', error);
            // Show play button instead of volume
            volumeIcon.className = 'fa fa-play';
        });
    });