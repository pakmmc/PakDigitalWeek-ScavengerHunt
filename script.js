document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.querySelector('.title').classList.add('fade-out');
        document.querySelector('.subtitle').classList.add('fade-out');
        document.querySelector('.begin-text').classList.add('fade-out');

        setTimeout(function() {
            document.getElementById("console").style.display = 'block';
        }, 2100); 
    }
});

function displayConsoleOutput(textArray, elementId, delay = 500) {
  let i = 0;
  const consoleElement = document.getElementById(elementId);
  let lines = []; 

  const viewportHeight = window.innerHeight;
  const paddingTopBottom = 40 * 2; 
  const fontSize = parseFloat(getComputedStyle(consoleElement).fontSize); 
  const lineHeight = fontSize * 1.2; 
  const availableHeight = viewportHeight - paddingTopBottom;
  const maxLines = Math.floor(availableHeight / lineHeight);

  function appendLine() {
      if (i < textArray.length) {
          const line = textArray[i];
          if (line.startsWith("DELAY:")) {
              const delayTime = parseFloat(line.substring(6));
              setTimeout(function() {
                  i++;
                  appendLine();
              }, delayTime * 1000); 
          } else {
              lines.push(line);

              if (lines.length > maxLines) {
                  lines.shift();
              }
              consoleElement.innerHTML = lines.join("<br>");
              i++;
              setTimeout(appendLine, delay);
          }
      }
  }

  function startAnimation() {
      appendLine();
  }

  const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
          startAnimation();
          observer.disconnect();
      }
  });

  observer.observe(consoleElement);
}

const txt = [
  "DELAY:2",
  "Reading package lists... Done",
  "DELAY:1",
  "Building dependency tree... Done",
  "DELAY:0.3",
  "Reading state information... Done",
  "The following additional packages will be installed:",
  "apg atop bmon byobu ccze cmatrix htop jp2a libconfuse-common libconfuse2 libio-pty-perl libipc-run-perl libtime-duration-perl moreutils pastebinit speedometer",
  "Suggested packages:",
  "apport ttf-ubuntu-font-family update-notifier-common cmatrix-xfont strace",
  "Recommended packages:",
  "run-one",
  "DELAY:0.8",
  "The following NEW packages will be installed:",
  "apg atop bmon byobu ccze cmatrix scavengerHunt htop jp2a libconfuse-common libconfuse2 libio-pty-perl libipc-run-perl libtime-duration-perl moreutils pastebinit speedometer",
  "0 upgraded, 17 newly installed, 0 to remove and 930 not upgraded.",
  "Need to get 3,367 kB of archives.",
  "After this operation, 8,102 kB of additional disk space will be used.",
  "DELAY:2",
  "Get:1 http://kali.download/kali kali-rolling/main arm64 atop arm64 2.10.0-2 [201 kB]",
  "Get:2 http://http.kali.org/kali kali-rolling/main arm64 apg arm64 2.2.3.dfsg.1-5+b1 [52.1 kB]",
  "Get:3 http://kali.download/kali kali-rolling/main arm64 libconfuse-common all 3.3-3 [13.4 kB]",
  "Get:4 http://kali.download/kali kali-rolling/main arm64 libconfuse2 arm64 3.3-3 [31.7 kB]",
  "Get:5 http://kali.download/kali kali-rolling/main arm64 bmon arm64 1:4.0-10 [42.6 kB]",
  "DELAY:0.1",
  "Get:6 http://kali.download/kali kali-rolling/main arm64 byobu all 5.133-1.1 [173 kB]",
  "Get:7 http://kali.download/kali kali-rolling/main arm64 ccze arm64 0.2.1-8 [74.5 kB]",
  "Get:8 http://kali.download/kali kali-rolling/main arm64 cmatrix arm64 2.0-6 [33.5 kB]",
  "Get:9 http://kali.download/kali kali-rolling/main arm64 scavengerHunt all 1.21-1.1 [2,288 kB]",
  "DELAY:1",
  "Get:10 http://kali.download/kali kali-rolling/main arm64 htop arm64 3.3.0-4 [155 kB]",
  "DELAY:0.3",
  "Get:11 http://kali.download/kali kali-rolling/main arm64 jp2a arm64 1.1.1-2 [31.6 kB]",
  "Get:12 http://kali.download/kali kali-rolling/main arm64 libio-pty-perl arm64 1:1.20-1 [33.8 kB]",
  "Get:13 http://kali.download/kali kali-rolling/main arm64 libipc-run-perl all 20231003.0-2 [101 kB]",
  "Get:14 http://kali.download/kali kali-rolling/main arm64 libtime-duration-perl all 1.21-2 [13.1 kB]",
  "DELAY:0.2",
  "Get:15 http://kali.download/kali kali-rolling/main arm64 moreutils arm64 0.69-1 [62.5 kB]",
  "Get:16 http://kali.download/kali kali-rolling/main arm64 pastebinit all 1.6.2-1 [43.4 kB]",
  "Get:17 http://kali.download/kali kali-rolling/main arm64 speedometer all 2.9-0.1 [17.2 kB]",
  "DELAY:0.5",
  "Fetched 3,367 kB in 6s (600 kB/s)",
  "Preconfiguring packages ...",
  "DELAY:0.2",
  "Selecting previously unselected package atop.",
  "(Reading database ... 456833 files and directories currently installed.)",
  "DELAY:0.1",
  "Preparing to unpack .../00-atop_2.10.0-2_arm64.deb ...",
  "Unpacking atop (2.10.0-2) ...",
  "Selecting previously unselected package apg.",
  "DELAY:0.4",
  "Preparing to unpack .../01-apg_2.2.3.dfsg.1-5+b1_arm64.deb ...",
  "DELAY:0.1",
  "Unpacking apg (2.2.3.dfsg.1-5+b1) ...",
  "Selecting previously unselected package libconfuse-common.",
  "DELAY:0.9",
  "Preparing to unpack .../02-libconfuse-common_3.3-3_all.deb ...",
  "Unpacking libconfuse-common (3.3-3) ...",
  "DELAY:0.4",
  "Selecting previously unselected package libconfuse2:arm64.",
  "DELAY:0.7",
  "Preparing to unpack .../03-libconfuse2_3.3-3_arm64.deb ...",
  "Unpacking libconfuse2:arm64 (3.3-3) ...",
  "DELAY:0.3",
  "Selecting previously unselected package bmon.",
  "Preparing to unpack .../04-bmon_1%3a4.0-10_arm64.deb ...",
  "DELAY:0.5",
  "Unpacking bmon (1:4.0-10) ...",
  "Selecting previously unselected package byobu.",
  "Preparing to unpack .../05-byobu_5.133-1.1_all.deb ...",
  "DELAY:0.2",
  "Unpacking byobu (5.133-1.1) ...",
  "Selecting previously unselected package ccze.",
  "DELAY:0.5",
  "Preparing to unpack .../06-ccze_0.2.1-8_arm64.deb ...",
  "DELAY:0.1",
  "Unpacking ccze (0.2.1-8) ...",
  "Selecting previously unselected package cmatrix.",
  "Preparing to unpack .../07-cmatrix_2.0-6_arm64.deb ...",
  "DELAY:0.1",
  "Unpacking cmatrix (2.0-6) ...",
  "Selecting previously unselected package scavengerHunt.",
  "DELAY:1",
  "Preparing to unpack .../08-scavengerHunt_1.21-1.1_all.deb ...",
  "Unpacking scavengerHunt (1.21-1.1) ...",
  "DELAY:0.4",
  "Selecting previously unselected package htop.",
  "DELAY:0.1",
  "Preparing to unpack .../09-htop_3.3.0-4_arm64.deb ...",
  "Unpacking htop (3.3.0-4) ...",
  "Selecting previously unselected package jp2a.",
  "DELAY:0.2",
  "Preparing to unpack .../10-jp2a_1.1.1-2_arm64.deb ...",
  "Unpacking jp2a (1.1.1-2) ...",
  "Selecting previously unselected package libio-pty-perl.",
  "DELAY:0.4",
  "Preparing to unpack .../11-libio-pty-perl_1%3a1.20-1_arm64.deb ...",
  "DELAY:0.1",
  "Unpacking libio-pty-perl (1:1.20-1) ...",
  "Selecting previously unselected package libipc-run-perl.",
  "Preparing to unpack .../12-libipc-run-perl_20231003.0-2_all.deb ...",
  "Unpacking libipc-run-perl (20231003.0-2) ...",
  "Selecting previously unselected package libtime-duration-perl.",
  "DELAY:0.1",
  "Preparing to unpack .../13-libtime-duration-perl_1.21-2_all.deb ...",
  "Unpacking libtime-duration-perl (1.21-2) ...",
  "Selecting previously unselected package moreutils.",
  "Preparing to unpack .../14-moreutils_0.69-1_arm64.deb ...",
  "Unpacking moreutils (0.69-1) ...",
  "DELAY:0.1",
  "Selecting previously unselected package pastebinit.",
  "Preparing to unpack .../15-pastebinit_1.6.2-1_all.deb ...",
  "Unpacking pastebinit (1.6.2-1) ...",
  "DELAY:0.2",
  "Selecting previously unselected package speedometer.",
  "Preparing to unpack .../16-speedometer_2.9-0.1_all.deb ...",
  "Unpacking speedometer (2.9-0.1) ...",
  "DELAY:0.1",
  "Setting up byobu (5.133-1.1) ...",
  "DELAY:0.7",
  "Setting up libio-pty-perl (1:1.20-1) ...",
  "DELAY:0.6",
  "Setting up htop (3.3.0-4) ...",
  "DELAY:0.5",
  "Setting up jp2a (1.1.1-2) ...","DELAY:0.1",
  "DELAY:0.6",
  "Setting up pastebinit (1.6.2-1) ...",
  "DELAY:0.2",
  "Setting up apg (2.2.3.dfsg.1-5+b1) ...",
  "Setting up atop (2.10.0-2) ...",
  "DELAY:0.1",
  "update-rc.d: We have no instructions for the atopacct init script.",
  "DELAY:0.6",
  "update-rc.d: It looks like a non-network service, we enable it.",
  "DELAY:0.6",
  "Created symlink /etc/systemd/system/timers.target.wants/atop-rotate.timer → /usr/lib/systemd/system/atop-rotate.timer.",
  "atopacct.service is a disabled or a static unit, not starting it.",
  "Created symlink /etc/systemd/system/multi-user.target.wants/atop.service → /usr/lib/systemd/system/atop.service.",
  "DELAY:3",
  "Setting up scavenger-hunt (2.9-0.1) ...",
  "DELAY:0.2",
  "Setting up cmatrix (2.0-6) ...",
  "DELAY:0.1",
  "Setting up libipc-run-perl (20231003.0-2) ...",
  "Setting up libtime-duration-perl (1.21-2) ...",
  "Setting up libconfuse-common (3.3-3) ...",
  "Setting up libconfuse2:arm64 (3.3-3) ...",
  "DELAY:0.5",
  "Setting up ccze (0.2.1-8) ...",
  "Setting up moreutils (0.69-1) ...",
  "Setting up bmon (1:4.0-10) ...",
  "Processing triggers for kali-menu (2023.4.7) ...",
  "DELAY:0.7",
  "Processing triggers for desktop-file-utils (0.27-1) ...",
  "Processing triggers for hicolor-icon-theme (0.17-2) ...",
  "Processing triggers for libc-bin (2.37-12) ...",
  "DELAY:0.1",
  "Processing triggers for man-db (2.12.0-3) ...",
  "DELAY:0.4",
  "Processing triggers for mailcap (3.70+nmu1) ...",
  "DELAY:0.7",
  "done",
  "DELAY:0.1",
  "Successfully installed scavenger-hunt v2.9-0.1",
];

displayConsoleOutput(txt, 'console', 10);

// TODO
// make an access granted message after the console output like dis:

setTimeout(() => { msg.style.background = "limegreen";
msg.innerHTML = "ACCESS GRANTED";
msg.style.boxShadow = "0 0 30px limegreen";
console.style.display = "none";}, 5000);