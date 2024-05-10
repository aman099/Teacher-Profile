import { TemplateEngine } from "./templateEngine.js";
import { JsonToHtml } from "./jsonToHtml.js";

let docpageData = {};

const docPageTemplate = {
  tag: "div",
  children: [
    {
      tag: "div",
      attributes: {
        class: "overlay",
      },
    },
    {
      tag: "div",
      attributes: {
        class: "navbar-container container is-fullhd",
      },
      children: [
        {
          tag: "nav",
          attributes: {
            id: "nav",
            class: "container is-fullhd",
          },
          children: [
            {
              tag: "header",
              children: [
                {
                  tag: "div",
                  attributes: {
                    class: "hamburger-icon-container",
                  },
                  children: [
                    {
                      tag: "span",
                    },
                    {
                      tag: "span",
                    },
                    {
                      tag: "span",
                    },
                  ],
                },
                {
                  tag: "img",
                  attributes: {
                    class: "main-logo-img",
                    src: "./assets/logo.png",
                  },
                },
                {
                  tag: "img",
                  attributes: {
                    class: "backup-img",
                    src: "./assets/logo-small.png",
                    alt: "Logo small",
                  },
                },
                {
                  tag: "div",
                  attributes: {
                    class:
                      "left-nav display-flex-2x2-wrap is-align-items-center",
                  },
                  children: [
                    {
                      tag: "span",
                      attributes: {
                        class: "bars",
                      },
                      children: [
                        {
                          tag: "i",
                          attributes: {
                            class: "fa-solid fa-bars",
                          },
                        },
                      ],
                    },
                    {
                      tag: "div",
                      attributes: {
                        class: "input-cont",
                      },
                      children: [
                        {
                          tag: "span",
                          children: [
                            {
                              tag: "i",
                              attributes: {
                                class: "fa-solid fa-magnifying-glass",
                              },
                            },
                          ],
                        },
                        {
                          tag: "input",
                          attributes: {
                            type: "text",
                            placeholder: "Search..",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              tag: "ul",
              children: [
                {
                  tag: "li",
                  children: [
                    {
                      tag: "details",
                      attributes: {
                        class: "dropdown",
                      },
                      children: [
                        {
                          tag: "summary",
                          children: [
                            {
                              tag: "img",
                              attributes: {
                                src: "./assets/icons/flags/flags/in.png",
                                alt: "Indian flag",
                              },
                            },
                          ],
                        },
                        {
                          tag: "ul",
                          attributes: {
                            role: "nav-drop",
                          },
                          children: [
                            {
                              tag: "li",
                              children: [
                                {
                                  tag: "img",
                                  attributes: {
                                    src: "./assets/icons/flags/flags/in.png",
                                    alt: "Indian flag",
                                  },
                                },
                                {
                                  tag: "a",
                                  attributes: {
                                    href: "#",
                                  },
                                  content: "Indian",
                                },
                              ],
                            },
                            {
                              tag: "li",
                              children: [
                                {
                                  tag: "img",
                                  attributes: {
                                    src: "./assets/icons/flags/flags/fr.png",
                                    alt: "France flag",
                                  },
                                },
                                {
                                  tag: "a",
                                  attributes: {
                                    href: "#",
                                  },
                                  content: "France",
                                },
                              ],
                            },
                            {
                              tag: "li",
                              children: [
                                {
                                  tag: "img",
                                  attributes: {
                                    src: "./assets/icons/flags/flags/ar.png",
                                    alt: "Argentina flag",
                                  },
                                },
                                {
                                  tag: "a",
                                  attributes: {
                                    href: "#",
                                  },
                                  content: "Argentina",
                                },
                              ],
                            },
                            {
                              tag: "li",
                              children: [
                                {
                                  tag: "img",
                                  attributes: {
                                    src: "./assets/icons/flags/flags/us.png",
                                    alt: "American flag",
                                  },
                                },
                                {
                                  tag: "a",
                                  attributes: {
                                    href: "#",
                                  },
                                  content: "U.S.A",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  tag: "li",
                  children: [
                    {
                      tag: "details",
                      attributes: {
                        class: "dropdown",
                      },
                      children: [
                        {
                          tag: "summary",
                          children: [
                            {
                              tag: "i",
                              attributes: {
                                class: "fa-regular fa-bell",
                              },
                            },
                          ],
                        },
                        {
                          tag: "ul",
                          attributes: {
                            role: "nav-drop",
                          },
                          children: [
                            {
                              tag: "div",
                              attributes: {
                                class: "nav-drop-heading",
                              },
                              children: [
                                {
                                  tag: "h2",
                                  content: "Notifications",
                                },
                                {
                                  tag: "p",
                                  content: "clear all",
                                },
                              ],
                            },
                            {
                              tag: "li",
                              children: [
                                {
                                  tag: "div",
                                  attributes: {
                                    class: "pro-img",
                                  },
                                  children: [
                                    {
                                      tag: "img",
                                      attributes: {
                                        src: "./assets/profiles/avatar-05.jpg",
                                        alt: "",
                                      },
                                    },
                                  ],
                                },
                                {
                                  tag: "div",
                                  attributes: {
                                    class: "pro-details",
                                  },
                                  children: [
                                    {
                                      tag: "p",
                                      content:
                                        "<span>priyanshi</span> approved <span>your estimate</span>",
                                    },
                                    {
                                      tag: "p",
                                      content: "4 mins ago",
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              tag: "li",
                              children: [
                                {
                                  tag: "div",
                                  attributes: {
                                    class: "pro-img",
                                  },
                                  children: [
                                    {
                                      tag: "img",
                                      attributes: {
                                        src: "./assets/profiles/avatar-02.jpg",
                                        alt: "",
                                      },
                                    },
                                  ],
                                },
                                {
                                  tag: "div",
                                  attributes: {
                                    class: "pro-details",
                                  },
                                  children: [
                                    {
                                      tag: "p",
                                      content:
                                        "<span>International Software Inc</span> has sent you a invoice in the amount of <span>$4</span>",
                                    },
                                    {
                                      tag: "p",
                                      content: "6 mins ago",
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              tag: "li",
                              children: [
                                {
                                  tag: "div",
                                  attributes: {
                                    class: "pro-img",
                                  },
                                  children: [
                                    {
                                      tag: "img",
                                      attributes: {
                                        src: "./assets/profiles/avatar-04.jpg",
                                        alt: "",
                                      },
                                    },
                                  ],
                                },
                                {
                                  tag: "div",
                                  attributes: {
                                    class: "pro-details",
                                  },
                                  children: [
                                    {
                                      tag: "p",
                                      content:
                                        "<span>John Hendry</span> sent a cancellation request <span>Apple iPhone XR</span>",
                                    },
                                    {
                                      tag: "p",
                                      content: "8 mins ago",
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              tag: "li",
                              children: [
                                {
                                  tag: "div",
                                  attributes: {
                                    class: "pro-img",
                                  },
                                  children: [
                                    {
                                      tag: "img",
                                      attributes: {
                                        src: "./assets/profiles/avatar-06.jpg",
                                        alt: "",
                                      },
                                    },
                                  ],
                                },
                                {
                                  tag: "div",
                                  attributes: {
                                    class: "pro-details",
                                  },
                                  children: [
                                    {
                                      tag: "p",
                                      content:
                                        "<span>Mercury Software Inc</span> added a new product <span>Apple MacBook Pro</span>",
                                    },
                                    {
                                      tag: "p",
                                      content: "12 mins ago",
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              tag: "li",
                              attributes: {
                                class: "clear-msg",
                              },
                              children: [
                                {
                                  tag: "p",
                                  content: "All Notifications cleared",
                                },
                              ],
                            },
                            {
                              tag: "div",
                              attributes: {
                                class: "nav-drop-heading nav-drop-heading-2",
                              },
                              children: [
                                {
                                  tag: "h2",
                                  content: "View all notifications",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  tag: "li",
                  attributes: {
                    class: "main-pro",
                  },
                  children: [
                    {
                      tag: "details",
                      attributes: {
                        class: "dropdown",
                      },
                      children: [
                        {
                          tag: "summary",
                          children: [
                            {
                              tag: "div",
                              attributes: {
                                class:
                                  "main-profile display-flex-2x2-wrap is-align-items-flex-start",
                              },
                              children: [
                                {
                                  tag: "div",
                                  attributes: {
                                    class: "main-pro-img",
                                  },
                                  children: [
                                    {
                                      tag: "img",
                                      attributes: {
                                        src: "./assets/profiles/avatar-01.jpg",
                                        alt: "Main profile image",
                                      },
                                    },
                                  ],
                                },
                                {
                                  tag: "div",
                                  attributes: {
                                    class: "main-pro-right",
                                  },
                                  children: [
                                    {
                                      tag: "h5",
                                      content: "Rahul Raj",
                                    },
                                    {
                                      tag: "p",
                                      content: "Administrator",
                                    },
                                  ],
                                },
                                {
                                  tag: "div",
                                  attributes: {
                                    class: "chevron-arr",
                                  },
                                  children: [
                                    {
                                      tag: "span",
                                      children: [
                                        {
                                          tag: "i",
                                          attributes: {
                                            class: "fa-solid fa-chevron-down",
                                          },
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              tag: "div",
                              attributes: {
                                class: "substitute-pro-img-cont",
                              },
                              children: [
                                {
                                  tag: "img",
                                  attributes: {
                                    class: "subs-pro-img",
                                    src: "./assets/profiles/avatar-01.jpg",
                                    alt: "Main Profile image",
                                  },
                                },
                              ],
                            },
                          ],
                        },
                        {
                          tag: "ul",
                          attributes: {
                            role: "nav-drop",
                          },
                          children: [
                            {
                              tag: "li",
                              children: [
                                {
                                  tag: "div",
                                  attributes: {
                                    class: "main-profile main-profile-2",
                                  },
                                  children: [
                                    {
                                      tag: "div",
                                      attributes: {
                                        class: "main-pro-img",
                                      },
                                      children: [
                                        {
                                          tag: "img",
                                          attributes: {
                                            src: "./assets/profiles/avatar-01.jpg",
                                          },
                                        },
                                      ],
                                    },
                                    {
                                      tag: "div",
                                      attributes: {
                                        class: "main-pro-right",
                                      },
                                      children: [
                                        {
                                          tag: "h5",
                                          content: "Rahul Raj",
                                        },
                                        {
                                          tag: "p",
                                          content: "Administrator",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              tag: "li",
                              children: [
                                {
                                  tag: "a",
                                  attributes: {
                                    href: "#",
                                  },
                                  content: "My Profile",
                                },
                              ],
                            },
                            {
                              tag: "li",
                              children: [
                                {
                                  tag: "a",
                                  attributes: {
                                    href: "#",
                                  },
                                  content: "Inbox",
                                },
                              ],
                            },
                            {
                              tag: "li",
                              children: [
                                {
                                  tag: "a",
                                  attributes: {
                                    href: "#",
                                  },
                                  content: "Log out",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tag: "div",
      attributes: {
        class: "sidebar-container container is-fullhd display-flex-2x2-wrap",
      },
      children: [
        {
          tag: "aside",
          attributes: {
            id: "sidebar",
            class: "sidebar",
          },
          children: [
            {
              tag: "nav",
              children: [
                {
                  tag: "h5",
                  content: "Main Menu",
                },
                {
                  tag: "ul",
                  children: [
                    {
                      tag: "div",
                      attributes: {
                        class: "revealer",
                      },
                      children: [
                        {
                          tag: "li",
                          children: [
                            {
                              tag: "div",
                              attributes: {
                                class: "menus-cont",
                              },
                              children: [
                                {
                                  tag: "span",
                                  children: [
                                    {
                                      tag: "i",
                                      attributes: {
                                        class: "fa-solid fa-gauge",
                                      },
                                    },
                                  ],
                                },
                                {
                                  tag: "a",
                                  attributes: {
                                    href: "#",
                                  },
                                  content: "Dashboard",
                                },
                              ],
                            },
                            {
                              tag: "span",
                              children: [
                                {
                                  tag: "i",
                                  attributes: {
                                    class: "fa-solid fa-chevron-right",
                                  },
                                },
                              ],
                            },
                          ],
                        },
                        {
                          tag: "ul",
                          attributes: {
                            class: "reveal reveal-1",
                          },
                          children: [
                            {
                              tag: "li",
                              content: "Admin Dashboard",
                            },
                            {
                              tag: "li",
                              content: "Teacher Dashboard",
                            },
                            {
                              tag: "li",
                              content: "Student Dashboard",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      tag: "div",
                      attributes: {
                        class: "revealer",
                      },
                      children: [
                        {
                          tag: "li",
                          children: [
                            {
                              tag: "div",
                              attributes: {
                                class: "menus-cont",
                              },
                              children: [
                                {
                                  tag: "span",
                                  children: [
                                    {
                                      tag: "i",
                                      attributes: {
                                        class: "fa-solid fa-gauge",
                                      },
                                    },
                                  ],
                                },
                                {
                                  tag: "a",
                                  attributes: {
                                    href: "#",
                                  },
                                  content: "Students",
                                },
                              ],
                            },
                            {
                              tag: "span",
                              children: [
                                {
                                  tag: "i",
                                  attributes: {
                                    class: "fa-solid fa-chevron-right",
                                  },
                                },
                              ],
                            },
                          ],
                        },
                        {
                          tag: "ul",
                          attributes: {
                            class: "reveal reveal-2",
                          },
                          children: [
                            {
                              tag: "li",
                              content: "Student List",
                            },
                            {
                              tag: "li",
                              content: "Student View",
                            },
                            {
                              tag: "li",
                              content: "Student Add",
                            },
                            {
                              tag: "li",
                              content: "Student Edit",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      tag: "div",
                      attributes: {
                        class: "revealer",
                      },
                      children: [
                        {
                          tag: "li",
                          children: [
                            {
                              tag: "div",
                              attributes: {
                                class: "menus-cont",
                              },
                              children: [
                                {
                                  tag: "span",
                                  children: [
                                    {
                                      tag: "i",
                                      attributes: {
                                        class: "fa-solid fa-gauge",
                                      },
                                    },
                                  ],
                                },
                                {
                                  tag: "a",
                                  attributes: {
                                    href: "#",
                                  },
                                  content: "Teachers",
                                },
                              ],
                            },
                            {
                              tag: "span",
                              children: [
                                {
                                  tag: "i",
                                  attributes: {
                                    class: "fa-solid fa-chevron-right",
                                  },
                                },
                              ],
                            },
                          ],
                        },
                        {
                          tag: "ul",
                          attributes: {
                            class: "reveal reveal-3",
                          },
                          children: [
                            {
                              tag: "li",
                              content: "Teacher List",
                            },
                            {
                              tag: "li",
                              content: "Teacher View",
                            },
                            {
                              tag: "li",
                              content: "Teacher Add",
                            },
                            {
                              tag: "li",
                              content: "Teacher Edit",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      tag: "div",
                      attributes: {
                        class: "revealer",
                      },
                      children: [
                        {
                          tag: "li",
                          children: [
                            {
                              tag: "div",
                              attributes: {
                                class: "menus-cont",
                              },
                              children: [
                                {
                                  tag: "span",
                                  children: [
                                    {
                                      tag: "i",
                                      attributes: {
                                        class: "fa-solid fa-gauge",
                                      },
                                    },
                                  ],
                                },
                                {
                                  tag: "a",
                                  attributes: {
                                    href: "#",
                                  },
                                  content: "Departments",
                                },
                              ],
                            },
                            {
                              tag: "span",
                              children: [
                                {
                                  tag: "i",
                                  attributes: {
                                    class: "fa-solid fa-chevron-right",
                                  },
                                },
                              ],
                            },
                          ],
                        },
                        {
                          tag: "ul",
                          attributes: {
                            class: "reveal reveal-4",
                          },
                          children: [
                            {
                              tag: "li",
                              content: "Department List",
                            },
                            {
                              tag: "li",
                              content: "Department Add",
                            },
                            {
                              tag: "li",
                              content: "Department Edit",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      tag: "div",
                      attributes: {
                        class: "revealer",
                      },
                      children: [
                        {
                          tag: "li",
                          children: [
                            {
                              tag: "div",
                              attributes: {
                                class: "menus-cont",
                              },
                              children: [
                                {
                                  tag: "span",
                                  children: [
                                    {
                                      tag: "i",
                                      attributes: {
                                        class: "fa-solid fa-gauge",
                                      },
                                    },
                                  ],
                                },
                                {
                                  tag: "a",
                                  attributes: {
                                    href: "#",
                                  },
                                  content: "Subjects",
                                },
                              ],
                            },
                            {
                              tag: "span",
                              children: [
                                {
                                  tag: "i",
                                  attributes: {
                                    class: "fa-solid fa-chevron-right",
                                  },
                                },
                              ],
                            },
                          ],
                        },
                        {
                          tag: "ul",
                          attributes: {
                            class: "reveal reveal-5",
                          },
                          children: [
                            {
                              tag: "li",
                              content: "Subject List",
                            },
                            {
                              tag: "li",
                              content: "Subject Add",
                            },
                            {
                              tag: "li",
                              content: "Subject Edit",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      tag: "div",
                      attributes: {
                        class: "revealer",
                      },
                      children: [
                        {
                          tag: "li",
                          children: [
                            {
                              tag: "div",
                              attributes: {
                                class: "menus-cont",
                              },
                              children: [
                                {
                                  tag: "span",
                                  children: [
                                    {
                                      tag: "i",
                                      attributes: {
                                        class: "fa-solid fa-gauge",
                                      },
                                    },
                                  ],
                                },
                                {
                                  tag: "a",
                                  attributes: {
                                    href: "#",
                                  },
                                  content: "Invoices",
                                },
                              ],
                            },
                            {
                              tag: "span",
                              children: [
                                {
                                  tag: "i",
                                  attributes: {
                                    class: "fa-solid fa-chevron-right",
                                  },
                                },
                              ],
                            },
                          ],
                        },
                        {
                          tag: "ul",
                          attributes: {
                            class: "reveal reveal-6",
                          },
                          children: [
                            {
                              tag: "li",
                              content: "Invoices List",
                            },
                            {
                              tag: "li",
                              content: "Invoices Grid",
                            },
                            {
                              tag: "li",
                              content: "Add Invoices",
                            },
                            {
                              tag: "li",
                              content: "Edit Invoices",
                            },
                            {
                              tag: "li",
                              content: "Invoices Details",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  tag: "h5",
                  content: "Management",
                },
                {
                  tag: "ul",
                  children: [
                    {
                      tag: "div",
                      attributes: {
                        class: "revealer",
                      },
                      children: [
                        {
                          tag: "li",
                          children: [
                            {
                              tag: "div",
                              attributes: {
                                class: "menus-cont",
                              },
                              children: [
                                {
                                  tag: "span",
                                  children: [
                                    {
                                      tag: "i",
                                      attributes: {
                                        class: "fa-solid fa-file-invoice",
                                      },
                                    },
                                  ],
                                },
                                {
                                  tag: "a",
                                  attributes: {
                                    href: "#",
                                  },
                                  content: "Accounts",
                                },
                              ],
                            },
                            {
                              tag: "span",
                              children: [
                                {
                                  tag: "i",
                                  attributes: {
                                    class: "fa-solid fa-chevron-right",
                                  },
                                },
                              ],
                            },
                          ],
                        },
                        {
                          tag: "ul",
                          attributes: {
                            class: "reveal",
                          },
                          children: [
                            {
                              tag: "li",
                              content: "Fees Collection",
                            },
                            {
                              tag: "li",
                              content: "Expenses",
                            },
                            {
                              tag: "li",
                              content: "Salary",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      tag: "li",
                      children: [
                        {
                          tag: "div",
                          attributes: {
                            class: "menus-cont",
                          },
                          children: [
                            {
                              tag: "span",
                              children: [
                                {
                                  tag: "i",
                                  attributes: {
                                    class: "fa-solid fa-gift",
                                  },
                                },
                              ],
                            },
                            {
                              tag: "a",
                              attributes: {
                                href: "#",
                              },
                              content: "Holiday",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      tag: "li",
                      children: [
                        {
                          tag: "div",
                          attributes: {
                            class: "menus-cont",
                          },
                          children: [
                            {
                              tag: "span",
                              children: [
                                {
                                  tag: "i",
                                  attributes: {
                                    class: "fa-solid fa-money-bill-wave",
                                  },
                                },
                              ],
                            },
                            {
                              tag: "a",
                              attributes: {
                                href: "#",
                              },
                              content: "Fees",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tag: "main",
          attributes: {
            id: "main",
            class: "",
          },
          children: [
            {
              tag: "div",
              attributes: {
                class:
                  "heading-container display-flex-2x2-wrap is-justify-content-space-between is-align-items-flex-end",
              },
              children: [
                {
                  tag: "h4",
                  content: "Teacher details",
                },
                {
                  tag: "p",
                  content: "<span>Teachers</span> / Teachers Details",
                },
              ],
            },
            {
              tag: "div",
              attributes: {
                class: "hero-section stars",
              },
              children: [
                {
                  tag: "div",
                  attributes: {
                    class:
                      "hero-sec-heading display-flex-2x2-wrap is-justify-content-space-between is-align-items-flex-start",
                  },
                  children: [
                    {
                      tag: "h5",
                      content: "Profile",
                    },
                    {
                      tag: "p",
                      children: [
                        {
                          tag: "span",
                          children: [
                            {
                              tag: "i",
                              attributes: {
                                class: "fa-solid fa-ellipsis-vertical",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  tag: "div",
                  attributes: {
                    class: "actual-profile-header",
                  },
                  children: [
                    {
                      tag: "div",
                      attributes: {
                        class: "bg-img-container",
                      },
                      children: [
                        {
                          tag: "img",
                          attributes: {
                            src: "./assets/profile-bg.jpg",
                            alt: "Teacher Profile background image",
                          },
                        },
                      ],
                    },
                    {
                      tag: "div",
                      attributes: {
                        class:
                          "actual-profile-info display-flex-2x2-wrap is-justify-content-space-evenly is-align-items-center",
                      },
                      children: [
                        {
                          tag: "div",
                          attributes: {
                            class: "dp-grand-container",
                          },
                          children: [
                            {
                              tag: "div",
                              attributes: {
                                class: "actual-dp",
                              },
                              children: [
                                {
                                  tag: "img",
                                  attributes: {
                                    src: "./assets/profiles/avatar-18.jpg",
                                    alt: "Profile DP",
                                  },
                                },
                              ],
                            },
                            {
                              tag: "div",
                              attributes: {
                                class: "name-container",
                              },
                              children: [
                                {
                                  tag: "h5",
                                  content: "Prerna Kapoor",
                                },
                                {
                                  tag: "p",
                                  content: "Electronics",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          tag: "div",
                          attributes: {
                            class: "followers-grand-cont display-flex-2x2-wrap",
                          },
                          children: [
                            {
                              tag: "div",
                              attributes: {
                                class: "followers-cont",
                              },
                              children: [
                                {
                                  tag: "p",
                                  content: "Followers",
                                },
                                {
                                  tag: "h5",
                                  content: "2580",
                                },
                              ],
                            },
                            {
                              tag: "div",
                              attributes: {
                                class: "followers-cont",
                              },
                              children: [
                                {
                                  tag: "p",
                                  content: "Followers",
                                },
                                {
                                  tag: "h5",
                                  content: "2580",
                                },
                              ],
                            },
                            {
                              tag: "div",
                              attributes: {
                                class: "followers-cont",
                              },
                              children: [
                                {
                                  tag: "p",
                                  content: "Followers",
                                },
                                {
                                  tag: "h5",
                                  content: "2580",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          tag: "div",
                          attributes: {
                            class: "btn-grand-container display-flex-2x2-wrap",
                          },
                          children: [
                            {
                              tag: "div",
                              attributes: {
                                class: "btn-container",
                              },
                              children: [
                                {
                                  tag: "button",
                                  attributes: {
                                    class: "primary-btn",
                                  },
                                  content: "Follow",
                                },
                              ],
                            },
                            {
                              tag: "div",
                              attributes: {
                                class: "btn-container btn-container-2",
                              },
                              children: [
                                {
                                  tag: "button",
                                  attributes: {
                                    class: "primary-btn",
                                  },
                                  content: "Message",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              tag: "section",
              attributes: {
                class: "actual-details-container",
              },
              children: [
                {
                  tag: "div",
                  attributes: {
                    class: "personal-det",
                  },
                  children: [
                    {
                      tag: "div",
                      attributes: {
                        class: "personal-det-heading",
                      },
                      children: [
                        {
                          tag: "h5",
                          content: "Personal Details:",
                        },
                      ],
                    },
                    {
                      tag: "ul",
                      attributes: {
                        class: "display-flex-2x2-wrap is-flex-direction-column",
                      },
                      children: [
                        {
                          tag: "li",
                          attributes: {
                            class:
                              "display-flex-2x2-wrap is-align-items-flex-start",
                          },
                          children: [
                            {
                              tag: "div",
                              attributes: {
                                class: "icon",
                              },
                              children: [
                                {
                                  tag: "span",
                                  children: [
                                    {
                                      tag: "i",
                                      attributes: {
                                        class: "fa-regular fa-user",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              tag: "div",
                              attributes: {
                                class: "details",
                              },
                              children: [
                                {
                                  tag: "h5",
                                  content: "Name",
                                },
                                {
                                  tag: "p",
                                  content: "Prerna Kapoor",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          tag: "li",
                          attributes: {
                            class:
                              "display-flex-2x2-wrap is-align-items-flex-start",
                          },
                          children: [
                            {
                              tag: "div",
                              attributes: {
                                class: "icon",
                              },
                              children: [
                                {
                                  tag: "span",
                                  children: [
                                    {
                                      tag: "i",
                                      attributes: {
                                        class: "fa-regular fa-building",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              tag: "div",
                              attributes: {
                                class: "details",
                              },
                              children: [
                                {
                                  tag: "h5",
                                  content: "Department",
                                },
                                {
                                  tag: "p",
                                  content: "Electronics",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          tag: "li",
                          attributes: {
                            class:
                              "display-flex-2x2-wrap is-align-items-flex-start",
                          },
                          children: [
                            {
                              tag: "div",
                              attributes: {
                                class: "icon",
                              },
                              children: [
                                {
                                  tag: "span",
                                  children: [
                                    {
                                      tag: "i",
                                      attributes: {
                                        class: "fa-solid fa-phone",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              tag: "div",
                              attributes: {
                                class: "details",
                              },
                              children: [
                                {
                                  tag: "h5",
                                  content: "Mobile",
                                },
                                {
                                  tag: "p",
                                  content: "+21 510-237-1901",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          tag: "li",
                          attributes: {
                            class:
                              "display-flex-2x2-wrap is-align-items-flex-start",
                          },
                          children: [
                            {
                              tag: "div",
                              attributes: {
                                class: "icon",
                              },
                              children: [
                                {
                                  tag: "span",
                                  children: [
                                    {
                                      tag: "i",
                                      attributes: {
                                        class: "fa-regular fa-envelope",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              tag: "div",
                              attributes: {
                                class: "details",
                              },
                              children: [
                                {
                                  tag: "h5",
                                  content: "Email",
                                },
                                {
                                  tag: "p",
                                  children: [
                                    {
                                      tag: "a",
                                      attributes: {
                                        href: "#",
                                      },
                                      content: "[email protected]",
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          tag: "li",
                          attributes: {
                            class:
                              "display-flex-2x2-wrap is-align-items-flex-start",
                          },
                          children: [
                            {
                              tag: "div",
                              attributes: {
                                class: "icon",
                              },
                              children: [
                                {
                                  tag: "span",
                                  children: [
                                    {
                                      tag: "i",
                                      attributes: {
                                        class: "fa-solid fa-venus",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              tag: "div",
                              attributes: {
                                class: "details",
                              },
                              children: [
                                {
                                  tag: "h5",
                                  content: "Gender",
                                },
                                {
                                  tag: "p",
                                  content: "Female",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          tag: "li",
                          attributes: {
                            class:
                              "display-flex-2x2-wrap is-align-items-flex-start",
                          },
                          children: [
                            {
                              tag: "div",
                              attributes: {
                                class: "icon",
                              },
                              children: [
                                {
                                  tag: "span",
                                  children: [
                                    {
                                      tag: "i",
                                      attributes: {
                                        class: "fa-regular fa-calendar",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              tag: "div",
                              attributes: {
                                class: "details",
                              },
                              children: [
                                {
                                  tag: "h5",
                                  content: "Date of Birth",
                                },
                                {
                                  tag: "p",
                                  content: "12 June 1995",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          tag: "li",
                          attributes: {
                            class:
                              "display-flex-2x2-wrap is-align-items-flex-start",
                          },
                          children: [
                            {
                              tag: "div",
                              attributes: {
                                class: "icon",
                              },
                              children: [
                                {
                                  tag: "span",
                                  children: [
                                    {
                                      tag: "i",
                                      attributes: {
                                        class: "fa-solid fa-language",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              tag: "div",
                              attributes: {
                                class: "details",
                              },
                              children: [
                                {
                                  tag: "h5",
                                  content: "Language",
                                },
                                {
                                  tag: "p",
                                  content: "English, French, Bangla",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          tag: "li",
                          attributes: {
                            class:
                              "display-flex-2x2-wrap is-align-items-flex-start",
                          },
                          children: [
                            {
                              tag: "div",
                              attributes: {
                                class: "icon",
                              },
                              children: [
                                {
                                  tag: "span",
                                  children: [
                                    {
                                      tag: "i",
                                      attributes: {
                                        class: "fa-solid fa-location-dot",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              tag: "div",
                              attributes: {
                                class: "details",
                              },
                              children: [
                                {
                                  tag: "h5",
                                  content: "Address",
                                },
                                {
                                  tag: "p",
                                  content: "180, Estern Avenue, United States",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  tag: "div",
                  attributes: {
                    class: "about-me",
                  },
                  children: [
                    {
                      tag: "div",
                      attributes: {
                        class: "about-me-heading",
                      },
                      children: [
                        {
                          tag: "h5",
                          content: "About Me",
                        },
                      ],
                    },
                    {
                      tag: "div",
                      attributes: {
                        class: "about-me-middle",
                      },
                      children: [
                        {
                          tag: "h5",
                          content: "Hello, I am Prerna Kapoor",
                        },
                        {
                          tag: "p",
                          content:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur officia deserunt mollit anim id est laborum. <br /> <br /> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                        },
                      ],
                    },
                    {
                      tag: "div",
                      attributes: {
                        class: "about-me-education",
                      },
                      children: [
                        {
                          tag: "h5",
                          content: "Education",
                        },
                        {
                          tag: "ul",
                          children: [
                            {
                              tag: "li",
                              children: [
                                {
                                  tag: "div",
                                  attributes: {
                                    class: "date",
                                  },
                                  content: "2008 - 2009",
                                },
                                {
                                  tag: "div",
                                  attributes: {
                                    class: "place",
                                  },
                                  content:
                                    "Secondary Schooling at xyz school of secondary education, Mumbai.",
                                },
                              ],
                            },
                            {
                              tag: "li",
                              children: [
                                {
                                  tag: "div",
                                  attributes: {
                                    class: "date",
                                  },
                                  content: "2011 - 2012",
                                },
                                {
                                  tag: "div",
                                  attributes: {
                                    class: "place",
                                  },
                                  content:
                                    "Higher Secondary Schooling at xyz school of higher secondary education, Mumbai.",
                                },
                              ],
                            },
                            {
                              tag: "li",
                              children: [
                                {
                                  tag: "div",
                                  attributes: {
                                    class: "date",
                                  },
                                  content: "2012 - 2015",
                                },
                                {
                                  tag: "div",
                                  attributes: {
                                    class: "place",
                                  },
                                  content:
                                    "Bachelor of Science at Abc College of Art and Science, Chennai.",
                                },
                              ],
                            },
                            {
                              tag: "li",
                              children: [
                                {
                                  tag: "div",
                                  attributes: {
                                    class: "date",
                                  },
                                  content: "2015 - 2017",
                                },
                                {
                                  tag: "div",
                                  attributes: {
                                    class: "place",
                                  },
                                  content:
                                    "Master of Science at Cdm College of Engineering and Technology, Pune.",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  tag: "div",
                  attributes: {
                    class: "skills",
                  },
                  children: [
                    {
                      tag: "h5",
                      content: "Skills",
                    },
                    {
                      tag: "ul",
                      children: [
                        {
                          tag: "li",
                          children: [
                            {
                              tag: "div",
                              attributes: {
                                class:
                                  "skill-desc display-flex-2x2-wrap is-align-items-center is-justify-content-space-between",
                              },
                              children: [
                                {
                                  tag: "p",
                                  content: "Photoshop",
                                },
                                {
                                  tag: "p",
                                  content: "90%",
                                },
                              ],
                            },
                            {
                              tag: "div",
                              attributes: {
                                class: "progress-bar progress-bar-primary",
                              },
                            },
                          ],
                        },
                        {
                          tag: "li",
                          children: [
                            {
                              tag: "div",
                              attributes: {
                                class:
                                  "skill-desc display-flex-2x2-wrap is-align-items-center is-justify-content-space-between",
                              },
                              children: [
                                {
                                  tag: "p",
                                  content: "Code Editor",
                                },
                                {
                                  tag: "p",
                                  content: "75%",
                                },
                              ],
                            },
                            {
                              tag: "div",
                              attributes: {
                                class: "progress-bar progress-bar-fill",
                              },
                            },
                          ],
                        },
                        {
                          tag: "li",
                          children: [
                            {
                              tag: "div",
                              attributes: {
                                class:
                                  "skill-desc display-flex-2x2-wrap is-align-items-center is-justify-content-space-between",
                              },
                              children: [
                                {
                                  tag: "p",
                                  content: "Illustrator",
                                },
                                {
                                  tag: "p",
                                  content: "95%",
                                },
                              ],
                            },
                            {
                              tag: "div",
                              attributes: {
                                class: "progress-bar progress-bar-fill",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              tag: "footer",
              attributes: {
                id: "footer",
              },
              children: [
                {
                  tag: "div",
                  attributes: {
                    class: "footer-container",
                  },
                  children: [
                    {
                      tag: "p",
                      content: "COPYRIGHT © 2022 DREAMGUYS.",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

let temp = TemplateEngine.populate(docPageTemplate, docpageData);
console.log(temp);

let html = JsonToHtml.convert(temp);
console.log(html);
document.getElementById("app").innerHTML = html;

////////////////////////////////////////////////////////////////////////

// const inputContainer = document.querySelector(
//   "#nav .nav-container .middle-nav .input-container"
// );
// const inputEl = document.querySelector(
//   "#nav .nav-container .middle-nav .input-container input"
// );
// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");

// inputContainer.addEventListener("click", () => {
//   modal.classList.add("active");
//   overlay.classList.add("active");
//   inputEl.blur();
// });

// document.addEventListener(
//   "click",
//   (e) => {
//     if (e.target.matches(".modal")) return;
//   },
//   { once: true }
// );

// overlay.addEventListener("click", (e) => {
//   modal.classList.remove("active");
//   overlay.classList.remove("active");
// });

// // Active toggle
// const firstToggleBtnEls = document.querySelectorAll(
//   ".toggle-btn-container .first-toggle .toggle-first"
// );
// const firstToggleContasiner = document.querySelector(
//   ".toggle-btn-container .first-toggle"
// );

// const secondToggleBtnEls = document.querySelectorAll(
//   ".toggle-btn-container .second-toggle .toggle-first"
// );
// const secondToggleContasiner = document.querySelector(
//   ".toggle-btn-container .second-toggle"
// );

// firstToggleBtnEls.forEach((firstToggleBtnEl) => {
//   firstToggleBtnEl.addEventListener("click", () => {
//     document
//       .querySelector(".toggle-btn-container .first-toggle .toggle-first.active")
//       ?.classList.remove("active");
//     firstToggleBtnEl.classList.add("active");
//   });
// });

// secondToggleBtnEls.forEach((secondToggleBtnEl) => {
//   secondToggleBtnEl.addEventListener("click", () => {
//     document
//       .querySelector(
//         ".toggle-btn-container .second-toggle .toggle-first.active"
//       )
//       ?.classList.remove("active");
//     secondToggleBtnEl.classList.add("active");
//   });
// });

// // Dropdown popup
// const dropdownBtn = document.querySelector(".dropdown-attribute");
// const dropdownContainer = document.querySelector(".toggle-dropdown-container");

// dropdownBtn.addEventListener("click", (e) => {
//   dropdownContainer.classList.toggle("active");
// });

// const dropDown1 = document.querySelector(".dropd-1");
// const dropDown2 = document.querySelector(".dropd-2");
// const darkModeDropDown = document.querySelector(".darkmode-droppdown-popup");
// const versionModeDropDown = document.querySelector(".version-droppdown-popup");

// dropDown1.addEventListener("click", () => {
//   versionModeDropDown.classList.toggle("active");
// });

// dropDown2.addEventListener("click", () => {
//   darkModeDropDown.classList.toggle("active");
// });
