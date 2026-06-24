// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Grader/Course Assistant",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-vibeos-and-the-speed-of-ai",
        
          title: "vibeOS and the Speed of AI",
        
        description: "Reflection on vibeOS",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/vibeos-and-the-speed-of-ai/";
          
        },
      },{id: "post-thoughts-on-suno-ai-v5-and-the-future-of-music-creation",
        
          title: "Thoughts on Suno AI v5 and the Future of Music Creation",
        
        description: "Reflections on AI-generated music and what it means for artists and music lovers",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/thoughts-on-suno-ai/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-hello-world",
          title: 'Hello World! ✨',
          description: "",
          section: "News",},{id: "news-i-will-be-joining-microsoft-as-a-software-engineer-intern-this-summer",
          title: '💼 I will be joining Microsoft as a Software Engineer Intern this summer!...',
          description: "",
          section: "News",},{id: "projects-unix-like-operating-system-kernel",
          title: 'Unix-like Operating System Kernel',
          description: "Implemented a custom Linux kernel with virtual memory management, process scheduling, system calls, file system, and device drivers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_linux_os_kernel/";
            },},{id: "projects-uiuc-treasure-hunt",
          title: 'UIUC Treasure Hunt',
          description: "Developed FPGA-based game &quot;UIUC Treasure Hunt&quot; using SystemVerilog. Used dual-port BRAM and AXI4-Lite for 640×480 HDMI graphics at 60FPS.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_fpga_game/";
            },},{id: "projects-invertible-ant-weight-battlebot",
          title: 'Invertible Ant-Weight BattleBot',
          description: "Designed and built an invertible ant-weight battlebot for senior design, focusing on compact mechanical packaging, drivetrain integration, and reliable operation after flips.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_senior_design_battlebot/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%69%68%65%6E%67%71%32@%69%6C%6C%69%6E%6F%69%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Ziheng-Qi", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ziheng-qi", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
