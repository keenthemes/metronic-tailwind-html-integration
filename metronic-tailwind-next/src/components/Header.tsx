
function Header() {
  return <header
  className="header fixed top-0 z-10 left-0 right-0 flex items-stretch shrink-0 bg-[#fefefe] dark:bg-coal-500"
  data-sticky="true"
  data-sticky-class="shadow-sm dark:border-b dark:border-b-coal-100"
  data-sticky-name="header"
  id="header"
>
  {/* begin: container */}
  <div
    className="container-fixed flex justify-between items-stretch lg:gap-4"
    id="header_container"
  >
    <div className="flex gap-1 lg:hidden items-center -ml-1">
      <a className="shrink-0" href="html/demo1.html">
        <img className="max-h-[25px] w-full" src="/media/app/mini-logo.svg" />
      </a>
      <div className="flex items-center">
        <button
          className="btn btn-icon btn-light btn-clear btn-sm"
          data-drawer-toggle="#sidebar"
        >
          <i className="ki-filled ki-menu"></i>
        </button>
        <button
          className="btn btn-icon btn-light btn-clear btn-sm"
          data-drawer-toggle="#megamenu_wrapper"
        >
          <i className="ki-filled ki-burger-menu-2"></i>
        </button>
      </div>
    </div>
    <div className="flex items-stretch" id="megamenu_container">
      <div
        className="flex items-stretch"
        data-reparent="true"
        data-reparent-mode="prepend|lg:prepend"
        data-reparent-target="body|lg:#megamenu_container"
      >
        <div
          className="hidden lg:flex lg:items-stretch"
          data-drawer="true"
          data-drawer-class="drawer drawer-start fixed z-10 top-0 bottom-0 w-full mr-5 max-w-[250px] p-5 lg:p-0 overflow-auto"
          data-drawer-enable="true|lg:false"
          id="megamenu_wrapper"
        >
          <div
            className="menu flex-col lg:flex-row gap-5 lg:gap-7.5"
            data-menu="true"
            id="megamenu"
          >
            <div className="menu-item active">
              <a
                className="menu-link text-nowrap text-sm text-gray-700 font-medium menu-item-hover:text-primary menu-item-active:text-gray-900 menu-item-active:font-semibold"
                href="html/demo1.html"
              >
                <span className="menu-title text-nowrap">Home</span>
              </a>
            </div>
            <div
              className="menu-item"
              data-menu-item-placement="bottom-start"
              data-menu-item-toggle="accordion|lg:dropdown"
              data-menu-item-trigger="click|lg:hover"
            >
              <div className="menu-link text-sm text-gray-700 font-medium menu-link-hover:text-primary menu-item-active:text-gray-900 menu-item-show:text-primary menu-item-here:text-gray-900 menu-item-active:font-semibold menu-item-here:font-semibold">
                <span className="menu-title text-nowrap">Public Profiles</span>
                <span className="menu-arrow flex lg:hidden">
                  <i className="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                  <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
                </span>
              </div>
              <div className="menu-dropdown w-full gap-0 lg:max-w-[875px]">
                <div className="pt-4 pb-2 lg:p-7.5">
                  <div className="grid lg:grid-cols-2 gap-5 lg:gap-10">
                    <div className="menu menu-default menu-fit flex-col">
                      <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-2 lg:mb-5">
                        Profiles
                      </h3>
                      <div className="grid lg:grid-cols-2 lg:gap-5">
                        <div className="flex flex-col">
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/public-profile/profiles/default.html"
                              tabIndex={0}
                            >
                              <span className="menu-icon">
                                <i className="ki-filled ki-badge"></i>
                              </span>
                              <span className="menu-title grow-0">Default</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/public-profile/profiles/creator.html"
                              tabIndex={0}
                            >
                              <span className="menu-icon">
                                <i className="ki-filled ki-coffee"></i>
                              </span>
                              <span className="menu-title grow-0">Creator</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/public-profile/profiles/company.html"
                              tabIndex={0}
                            >
                              <span className="menu-icon">
                                <i className="ki-filled ki-abstract-41"></i>
                              </span>
                              <span className="menu-title grow-0">Company</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/public-profile/profiles/nft.html"
                              tabIndex={0}
                            >
                              <span className="menu-icon">
                                <i className="ki-filled ki-bitcoin"></i>
                              </span>
                              <span className="menu-title grow-0">NFT</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/public-profile/profiles/blogger.html"
                              tabIndex={0}
                            >
                              <span className="menu-icon">
                                <i className="ki-filled ki-message-text"></i>
                              </span>
                              <span className="menu-title grow-0">Blogger</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/public-profile/profiles/crm.html"
                              tabIndex={0}
                            >
                              <span className="menu-icon">
                                <i className="ki-filled ki-devices"></i>
                              </span>
                              <span className="menu-title grow-0">CRM</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/public-profile/profiles/gamer.html"
                              tabIndex={0}
                            >
                              <span className="menu-icon">
                                <i className="ki-filled ki-ghost"></i>
                              </span>
                              <span className="menu-title grow-0">Gamer</span>
                            </a>
                          </div>
                        </div>
                        <div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/public-profile/profiles/feeds.html"
                              tabIndex={0}
                            >
                              <span className="menu-icon">
                                <i className="ki-filled ki-book"></i>
                              </span>
                              <span className="menu-title grow-0">Feeds</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/public-profile/profiles/plain.html"
                              tabIndex={0}
                            >
                              <span className="menu-icon">
                                <i className="ki-filled ki-files"></i>
                              </span>
                              <span className="menu-title grow-0">Plain</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/public-profile/profiles/modal.html"
                              tabIndex={0}
                            >
                              <span className="menu-icon">
                                <i className="ki-filled ki-mouse-square"></i>
                              </span>
                              <span className="menu-title grow-0">Modal</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="#" tabIndex={0}>
                              <span className="menu-icon">
                                <i className="ki-filled ki-financial-schedule"></i>
                              </span>
                              <span className="menu-title grow-0">
                                Freelancer
                              </span>
                              <span className="menu-badge">
                                <span className="badge badge-xs">Soon</span>
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="#" tabIndex={0}>
                              <span className="menu-icon">
                                <i className="ki-filled ki-technology-4"></i>
                              </span>
                              <span className="menu-title grow-0">
                                Developer
                              </span>
                              <span className="menu-badge">
                                <span className="badge badge-xs">Soon</span>
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="#" tabIndex={0}>
                              <span className="menu-icon">
                                <i className="ki-filled ki-users"></i>
                              </span>
                              <span className="menu-title grow-0">Team</span>
                              <span className="menu-badge">
                                <span className="badge badge-xs">Soon</span>
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="#" tabIndex={0}>
                              <span className="menu-icon">
                                <i className="ki-filled ki-calendar-tick"></i>
                              </span>
                              <span className="menu-title grow-0">Events</span>
                              <span className="menu-badge">
                                <span className="badge badge-xs">Soon</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="menu menu-default menu-fit flex-col">
                      <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-2 lg:mb-5">
                        Other Pages
                      </h3>
                      <div className="grid lg:grid-cols-2 lg:gap-5">
                        <div className="flex flex-col">
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/public-profile/projects/3-columns.html"
                              tabIndex={0}
                            >
                              <span className="menu-icon">
                                <i className="ki-filled ki-element-6"></i>
                              </span>
                              <span className="menu-title grow-0">
                                Projects - 3 Columns
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/public-profile/projects/2-columns.html"
                              tabIndex={0}
                            >
                              <span className="menu-icon">
                                <i className="ki-filled ki-element-4"></i>
                              </span>
                              <span className="menu-title grow-0">
                                Projects - 2 Columns
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/public-profile/works.html"
                              tabIndex={0}
                            >
                              <span className="menu-icon">
                                <i className="ki-filled ki-office-bag"></i>
                              </span>
                              <span className="menu-title grow-0">Works</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/public-profile/teams.html"
                              tabIndex={0}
                            >
                              <span className="menu-icon">
                                <i className="ki-filled ki-people"></i>
                              </span>
                              <span className="menu-title grow-0">Teams</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/public-profile/network.html"
                              tabIndex={0}
                            >
                              <span className="menu-icon">
                                <i className="ki-filled ki-icon"></i>
                              </span>
                              <span className="menu-title grow-0">Network</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/public-profile/activity.html"
                              tabIndex={0}
                            >
                              <span className="menu-icon">
                                <i className="ki-filled ki-chart-line-up-2"></i>
                              </span>
                              <span className="menu-title grow-0">
                                Activity
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/public-profile/campaigns/card.html"
                              tabIndex={0}
                            >
                              <span className="menu-icon">
                                <i className="ki-filled ki-element-11"></i>
                              </span>
                              <span className="menu-title grow-0">
                                Campaigns - Card
                              </span>
                            </a>
                          </div>
                        </div>
                        <div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/public-profile/campaigns/list.html"
                              tabIndex={0}
                            >
                              <span className="menu-icon">
                                <i className="ki-filled ki-kanban"></i>
                              </span>
                              <span className="menu-title grow-0">
                                Campaigns - List
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/public-profile/empty.html"
                              tabIndex={0}
                            >
                              <span className="menu-icon">
                                <i className="ki-filled ki-file-sheet"></i>
                              </span>
                              <span className="menu-title grow-0">
                                Empty Page
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="#" tabIndex={0}>
                              <span className="menu-icon">
                                <i className="ki-filled ki-document"></i>
                              </span>
                              <span className="menu-title grow-0">
                                Documents
                              </span>
                              <span className="menu-badge">
                                <span className="badge badge-xs">Soon</span>
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="#" tabIndex={0}>
                              <span className="menu-icon">
                                <i className="ki-filled ki-award"></i>
                              </span>
                              <span className="menu-title grow-0">Badges</span>
                              <span className="menu-badge">
                                <span className="badge badge-xs">Soon</span>
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="#" tabIndex={0}>
                              <span className="menu-icon">
                                <i className="ki-filled ki-gift"></i>
                              </span>
                              <span className="menu-title grow-0">Awards</span>
                              <span className="menu-badge">
                                <span className="badge badge-xs">Soon</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center lg:justify-between rounded-xl lg:rounded-t-none bg-light-active dark:bg-coal-500 border border-gray-300 lg:border-0 lg:border-t lg:border-t-gray-300 dark:lg:border-t-gray-100 px-4 py-4 lg:px-7.5 lg:py-5 gap-2.5">
                  <div className="flex flex-col gap-1.5">
                    <div className="text-md font-semibold text-gray-900 leading-none">
                      Read to Get Started ?
                    </div>
                    <div className="text-2sm fomt-medium text-gray-600">
                      Take your docs to the next level of Metronic
                    </div>
                  </div>
                  <a className="btn btn-sm btn-dark" href="#">
                    Read Documentation
                  </a>
                </div>
              </div>
            </div>
            <div
              className="menu-item"
              data-menu-item-offset="-300px, 0"
              data-menu-item-overflow="true"
              data-menu-item-placement="bottom-start"
              data-menu-item-toggle="accordion|lg:dropdown"
              data-menu-item-trigger="click|lg:hover"
            >
              <div className="menu-link text-sm text-gray-700 font-medium menu-link-hover:text-primary menu-item-active:text-gray-900 menu-item-show:text-primary menu-item-here:text-gray-900 menu-item-active:font-semibold menu-item-here:font-semibold">
                <span className="menu-title text-nowrap">My Account</span>
                <span className="menu-arrow flex lg:hidden">
                  <i className="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                  <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
                </span>
              </div>
              <div className="menu-dropdown flex-col lg:flex-row gap-0 w-full lg:max-w-[1240px]">
                <div className="lg:w-[250px] mt-2 lg:mt-0 lg:border-r lg:border-r-gray-200 rounded-xl lg:rounded-l-xl lg:rounded-r-none shrink-0 px-3 py-4 lg:p-7.5 bg-light-active dark:bg-coal-500 dark:lg:border-r-coal-100">
                  <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-2 lg:mb-5">
                    General Pages
                  </h3>
                  <div className="menu menu-default menu-fit flex-col">
                    <div className="menu-item">
                      <a
                        className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                        href="html/demo1/account/integrations.html"
                      >
                        <span className="menu-icon">
                          <i className="ki-filled ki-technology-2"></i>
                        </span>
                        <span className="menu-title grow-0">Integrations</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a
                        className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                        href="html/demo1/account/notifications.html"
                      >
                        <span className="menu-icon">
                          <i className="ki-filled ki-notification-1"></i>
                        </span>
                        <span className="menu-title grow-0">Notifications</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a
                        className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                        href="html/demo1/account/api-keys.html"
                      >
                        <span className="menu-icon">
                          <i className="ki-filled ki-key"></i>
                        </span>
                        <span className="menu-title grow-0">API Keys</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a
                        className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                        href="html/demo1/account/appearance.html"
                      >
                        <span className="menu-icon">
                          <i className="ki-filled ki-eye"></i>
                        </span>
                        <span className="menu-title grow-0">Appearance</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a
                        className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                        href="html/demo1/account/invite-a-friend.html"
                      >
                        <span className="menu-icon">
                          <i className="ki-filled ki-user-tick"></i>
                        </span>
                        <span className="menu-title grow-0">
                          Invite a Friend
                        </span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a
                        className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                        href="html/demo1/account/activity.html"
                      >
                        <span className="menu-icon">
                          <i className="ki-filled ki-support"></i>
                        </span>
                        <span className="menu-title grow-0">Activity</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a
                        className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                        href="#"
                      >
                        <span className="menu-icon">
                          <i className="ki-filled ki-verify"></i>
                        </span>
                        <span className="menu-title grow-0">Brand</span>
                        <span className="menu-badge">
                          <span className="badge badge-xs">Soon</span>
                        </span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a
                        className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                        href="#"
                      >
                        <span className="menu-icon">
                          <i className="ki-filled ki-euro"></i>
                        </span>
                        <span className="menu-title grow-0">Get Paid</span>
                        <span className="menu-badge">
                          <span className="badge badge-xs">Soon</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pt-4 pb-2 lg:p-7.5 lg:pb-5 grow">
                  <div className="grid lg:grid-cols-5 gap-5">
                    <div className="flex flex-col">
                      <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-2 lg:mb-5">
                        Account Home
                      </h3>
                      <div className="menu menu-default menu-fit flex-col">
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/home/get-started.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Get Started
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/home/user-profile.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              User Profile
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/home/company-profile.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Company Profile
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/home/settings-sidebar.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              With Sidebar
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/home/settings-enterprise.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Enterprise
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/home/settings-plain.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">Plain</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/home/settings-modal.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">Modal</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-2 lg:mb-5">
                        Billing
                      </h3>
                      <div className="menu menu-default menu-fit flex-col">
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/billing/basic.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Basic Billing
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/billing/enterprise.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Enterprise
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/billing/plans.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">Plans</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/billing/history.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Billing History
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="#" tabIndex={0}>
                            <span className="menu-title grow-0">Tax Info</span>
                            <span className="menu-badge">
                              <span className="badge badge-xs">Soon</span>
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="#" tabIndex={0}>
                            <span className="menu-title grow-0">Invoices</span>
                            <span className="menu-badge">
                              <span className="badge badge-xs">Soon</span>
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="#" tabIndex={0}>
                            <span className="menu-title grow-0">Gateaways</span>
                            <span className="menu-badge">
                              <span className="badge badge-xs">Soon</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-2 lg:mb-5">
                        Security
                      </h3>
                      <div className="menu menu-default menu-fit flex-col">
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/security/get-started.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Get Started
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/security/overview.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Security Overview
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/security/allowed-ip-addresses.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              IP Addresses
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/security/privacy-settings.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Privacy Settings
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/security/device-management.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Device Management
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/security/backup-and-recovery.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Backup &amp; Recovery
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/security/current-sessions.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Current Sessions
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/security/security-log.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Security Log
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-2 lg:mb-5">
                        Members &amp; Roles
                      </h3>
                      <div className="menu menu-default menu-fit flex-col">
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/members/team-starter.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Teams Starter
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/members/teams.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">Teams</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/members/team-info.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">Team Info</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/members/members-starter.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Members Starter
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/members/team-members.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Team Members
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/members/import-members.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Import Members
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/members/roles.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">Roles</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/members/permissions-toggle.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Persmissions - Toggler
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/members/permissions-check.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Persmissions - Check
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-2 lg:mb-5">
                        Other Pages
                      </h3>
                      <div className="menu menu-default menu-fit flex-col">
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/integrations.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Integrations
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/notifications.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Notifications
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/api-keys.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">API Keys</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/appearance.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Appearance
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/invite-a-friend.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">
                              Invite a Friend
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/activity.html"
                            tabIndex={0}
                          >
                            <span className="menu-title grow-0">Activity</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="menu-item"
              data-menu-item-offset="-300px, 0"
              data-menu-item-overflow="true"
              data-menu-item-placement="bottom-start"
              data-menu-item-toggle="accordion|lg:dropdown"
              data-menu-item-trigger="click|lg:hover"
            >
              <div className="menu-link text-sm text-gray-700 font-medium menu-link-hover:text-primary menu-item-active:text-gray-900 menu-item-show:text-primary menu-item-here:text-gray-900 menu-item-active:font-semibold menu-item-here:font-semibold">
                <span className="menu-title text-nowrap">Network</span>
                <span className="menu-arrow flex lg:hidden">
                  <i className="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                  <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
                </span>
              </div>
              <div className="menu-dropdown flex-col gap-0 w-full lg:max-w-[670px]">
                <div className="flex flex-col lg:flex-row">
                  <div className="flex flex-col gap-5 lg:w-[250px] mt-2 lg:mt-0 lg:border-r lg:border-r-gray-200 rounded-xl lg:rounded-none lg:rounded-tl-xl shrink-0 px-3 py-4 lg:p-7.5 bg-light-active dark:bg-coal-500 dark:lg:border-r-coal-100">
                    <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 h-3.5">
                      General Pages
                    </h3>
                    <div className="menu menu-default menu-fit flex-col">
                      <div className="menu-item">
                        <a
                          className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                          href="#"
                        >
                          <span className="menu-icon">
                            <i className="ki-filled ki-flag"></i>
                          </span>
                          <span className="menu-title grow-0">Get Started</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                          href="#"
                        >
                          <span className="menu-icon">
                            <i className="ki-filled ki-users"></i>
                          </span>
                          <span className="menu-title grow-0">Colleagues</span>
                          <span className="menu-badge">
                            <span className="badge badge-xs">Soon</span>
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                          href="#"
                        >
                          <span className="menu-icon">
                            <i className="ki-filled ki-heart"></i>
                          </span>
                          <span className="menu-title grow-0">Donators</span>
                          <span className="menu-badge">
                            <span className="badge badge-xs">Soon</span>
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                          href="#"
                        >
                          <span className="menu-icon">
                            <i className="ki-filled ki-abstract-21"></i>
                          </span>
                          <span className="menu-title grow-0">Leads</span>
                          <span className="menu-badge">
                            <span className="badge badge-xs">Soon</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 pb-2 lg:p-7.5 lg:pb-5 grow">
                    <div className="grid lg:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-5">
                        <h3 className="flex items-center gap-1.5 text-sm text-gray-800 font-semibold leading-none pl-2.5 h-3.5">
                          User Cards
                        </h3>
                        <div className="menu menu-default menu-fit flex-col">
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/network/user-cards/mini-cards.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">
                                Mini Cards
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/network/user-cards/author.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">
                                Team Members
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/network/user-cards/nft.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">Authors</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/network/user-cards/social.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">
                                NFT Users
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="#" tabIndex={0}>
                              <span className="menu-title grow-0">
                                Social Users
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="#" tabIndex={0}>
                              <span className="menu-title grow-0">Gamers</span>
                              <span className="menu-badge">
                                <span className="badge badge-xs">Soon</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-5">
                        <h3 className="flex items-center gap-1.5 text-sm text-gray-800 font-semibold leading-none pl-2.5 h-3.5">
                          User Base
                          <span className="left-auto badge badge-xs badge-primary badge-outline">
                            Datatables
                          </span>
                        </h3>
                        <div className="menu menu-default menu-fit flex-col">
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/network/user-base/team-crew.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">
                                Team Crew
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/network/user-base/app-roster.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">
                                App Roster
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/network/user-base/market-authors.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">
                                Market Authors
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/network/user-base/saas-users.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">
                                SaaS Users
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/network/user-base/store-clients.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">
                                Store Clients
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/network/user-base/visitors.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">
                                Visitors
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center lg:justify-between rounded-xl lg:rounded-t-none bg-light-active dark:bg-coal-500 border border-gray-300 lg:border-0 lg:border-t lg:border-t-gray-300 dark:lg:border-t-gray-100 px-4 py-4 lg:px-7.5 lg:py-5 gap-2.5">
                  <div className="flex flex-col gap-1.5">
                    <div className="text-md font-semibold text-gray-900 leading-none">
                      Read to Get Started ?
                    </div>
                    <div className="text-2sm fomt-medium text-gray-600">
                      Take your docs to the next level of Metronic
                    </div>
                  </div>
                  <a className="btn btn-sm btn-dark" href="#">
                    Read Documentation
                  </a>
                </div>
              </div>
            </div>
            <div
              className="menu-item"
              data-menu-item-offset="-300px, 0"
              data-menu-item-overflow="true"
              data-menu-item-placement="bottom-start"
              data-menu-item-toggle="accordion|lg:dropdown"
              data-menu-item-trigger="click|lg:hover"
            >
              <div className="menu-link text-sm text-gray-700 font-medium menu-link-hover:text-primary menu-item-active:text-gray-900 menu-item-show:text-primary menu-item-here:text-gray-900 menu-item-active:font-semibold menu-item-here:font-semibold">
                <span className="menu-title text-nowrap">Authentication</span>
                <span className="menu-arrow flex lg:hidden">
                  <i className="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                  <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
                </span>
              </div>
              <div className="menu-dropdown flex-col gap-0 w-full lg:max-w-[670px]">
                <div className="flex flex-col lg:flex-row">
                  <div className="pt-4 pb-2 lg:p-7.5 lg:pb-5 grow">
                    <div className="grid lg:grid-cols-2 gap-5">
                      <div className="flex flex-col">
                        <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-2 lg:mb-5">
                          Classic Layout
                        </h3>
                        <div className="menu menu-default menu-fit flex-col">
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/authentication/classic/sign-in.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">Sign In</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/authentication/classic/sign-up.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">Sign Up</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/authentication/classic/2fa.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">2FA</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/authentication/classic/check-email.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">
                                Check Email
                              </span>
                            </a>
                          </div>
                          <div className="menu-item pt-1">
                            <span className="text-gray-600 font-medium text-2sm p-2.5">
                              Reset Password
                            </span>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/authentication/classic/reset-password/enter-email.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">
                                Enter Email
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/authentication/classic/reset-password/check-email.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">
                                Check Email
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/authentication/classic/reset-password/change-password.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">
                                Change Password
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/authentication/classic/reset-password/password-changed.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">
                                Password is Changed
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-2 lg:mb-5">
                          Branded Layout
                        </h3>
                        <div className="menu menu-default menu-fit flex-col">
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/authentication/branded/sign-in.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">Sign In</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/authentication/branded/sign-up.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">Sign Up</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/authentication/branded/2fa.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">2FA</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/authentication/branded/check-email.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">
                                Check Email
                              </span>
                            </a>
                          </div>
                          <div className="menu-item pt-1">
                            <span className="text-gray-600 font-medium text-2sm p-2.5">
                              Reset Password
                            </span>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/authentication/branded/reset-password/enter-email.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">
                                Enter Email
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/authentication/branded/reset-password/check-email.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">
                                Check Email
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/authentication/branded/reset-password/change-password.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">
                                Change Password
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/authentication/branded/reset-password/password-changed.html"
                              tabIndex={0}
                            >
                              <span className="menu-title grow-0">
                                Password is Changed
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-[250px] mb-4 lg:mb-0 lg:border-l lg:border-l-gray-200 rounded-xl lg:rounded-r-xl lg:rounded-l-none shrink-0 px-3 py-4 lg:p-7.5 bg-light-active dark:bg-coal-500 dark:lg:border-l-coal-100">
                    <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-5">
                      Other Pages
                    </h3>
                    <div className="menu menu-default menu-fit flex-col">
                      <div className="menu-item">
                        <a
                          className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                          href="html/demo1/authentication/welcome-message.html"
                        >
                          <span className="menu-icon">
                            <i className="ki-filled ki-like-2"></i>
                          </span>
                          <span className="menu-title grow-0">
                            Welcome Message
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                          href="html/demo1/authentication/account-deactivated.html"
                        >
                          <span className="menu-icon">
                            <i className="ki-filled ki-shield-cross"></i>
                          </span>
                          <span className="menu-title grow-0">
                            Account Deactivated
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                          href="html/demo1/authentication/error-404.html"
                        >
                          <span className="menu-icon">
                            <i className="ki-filled ki-message-question"></i>
                          </span>
                          <span className="menu-title grow-0">Error 404</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100"
                          href="html/demo1/authentication/error-500.html"
                        >
                          <span className="menu-icon">
                            <i className="ki-filled ki-information"></i>
                          </span>
                          <span className="menu-title grow-0">Error 500</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center lg:justify-between rounded-xl lg:rounded-t-none bg-light-active dark:bg-coal-500 border border-gray-300 lg:border-0 lg:border-t lg:border-t-gray-300 dark:lg:border-t-gray-100 px-4 py-4 lg:px-7.5 lg:py-5 gap-2.5">
                  <div className="flex flex-col gap-1.5">
                    <div className="text-md font-semibold text-gray-900 leading-none">
                      Read to Get Started ?
                    </div>
                    <div className="text-2sm fomt-medium text-gray-600">
                      Take your docs to the next level of Metronic
                    </div>
                  </div>
                  <a className="btn btn-sm btn-dark" href="#">
                    Read Documentation
                  </a>
                </div>
              </div>
            </div>
            <div
              className="menu-item"
              data-menu-item-offset="0,0|lg:-20px, 0"
              data-menu-item-overflow="true"
              data-menu-item-placement="bottom-start"
              data-menu-item-toggle="dropdown"
              data-menu-item-trigger="click|lg:hover"
            >
              <div className="menu-link text-sm text-gray-700 font-medium menu-link-hover:text-primary menu-item-active:text-gray-900 menu-item-show:text-primary menu-item-here:text-gray-900 menu-item-active:font-semibold menu-item-here:font-semibold">
                <span className="menu-title text-nowrap">Help</span>
                <span className="menu-arrow flex lg:hidden">
                  <i className="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                  <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
                </span>
              </div>
              <div className="menu-dropdown menu-default py-2.5 w-full max-w-[220px]">
                <div className="menu-item">
                  <a
                    className="menu-link"
                    href="https://keenthemes.com/metronic/tailwind/docs/getting-started/installation"
                    tabIndex={0}
                  >
                    <span className="menu-icon">
                      <i className="ki-filled ki-coffee"></i>
                    </span>
                    <span className="menu-title grow-0">Getting Started</span>
                  </a>
                </div>
                <div
                  className="menu-item"
                  data-menu-item-placement="right-start"
                  data-menu-item-toggle="dropdown"
                  data-menu-item-trigger="click|lg:hover"
                >
                  <div className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-filled ki-information"></i>
                    </span>
                    <span className="menu-title">Support Forum</span>
                    <span className="menu-arrow">
                      <i className="ki-filled ki-right text-3xs"></i>
                    </span>
                  </div>
                  <div className="menu-dropdown menu-default w-full max-w-[175px] lg:max-w-[220px]">
                    <div className="menu-item">
                      <a
                        className="menu-link"
                        href="https://devs.keenthemes.com"
                        tabIndex={0}
                      >
                        <span className="menu-icon">
                          <i className="ki-filled ki-questionnaire-tablet"></i>
                        </span>
                        <span className="menu-title grow-0">All Questions</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a
                        className="menu-link"
                        href="https://devs.keenthemes.com/popular"
                        tabIndex={0}
                      >
                        <span className="menu-icon">
                          <i className="ki-filled ki-star"></i>
                        </span>
                        <span className="menu-title grow-0">
                          Popular Questions
                        </span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a
                        className="menu-link"
                        href="https://devs.keenthemes.com/question/create"
                        tabIndex={0}
                      >
                        <span className="menu-icon">
                          <i className="ki-filled ki-message-question"></i>
                        </span>
                        <span className="menu-title grow-0">Ask Question</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="menu-item">
                  <a
                    className="menu-link"
                    href="https://keenthemes.com/metronic/tailwind/docs/getting-started/license"
                    tabIndex={0}
                  >
                    <span className="menu-icon">
                      <i className="ki-filled ki-subtitle"></i>
                    </span>
                    <span className="menu-title">Licenses &amp; FAQ</span>
                    <span className="menu-badge" data-tooltip="#menu_tooltip_3">
                      <i className="ki-filled ki-information-2 text-gray-500 text-md"></i>
                    </span>
                    <div className="tooltip" id="menu_tooltip_3">
                      Learn more about licenses
                    </div>
                  </a>
                </div>
                <div className="menu-item">
                  <a
                    className="menu-link"
                    href="https://keenthemes.com/metronic/tailwind/docs"
                    tabIndex={0}
                  >
                    <span className="menu-icon">
                      <i className="ki-filled ki-questionnaire-tablet"></i>
                    </span>
                    <span className="menu-title grow-0">Documentation</span>
                  </a>
                </div>
                <div className="menu-separator"></div>
                <div className="menu-item">
                  <a
                    className="menu-link"
                    href="https://keenthemes.com/contact"
                    tabIndex={0}
                  >
                    <span className="menu-icon">
                      <i className="ki-filled ki-share"></i>
                    </span>
                    <span className="menu-title grow-0">Contact Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-2 lg:gap-3.5">
      <button
        className="btn btn-icon btn-icon-lg size-9 rounded-full hover:bg-primary-light hover:text-primary text-gray-500"
        data-modal-toggle="#search_modal"
      >
        <i className="ki-filled ki-magnifier"></i>
      </button>
      <div
        className="dropdown"
        data-dropdown="true"
        data-dropdown-offset="170px, 10px"
        data-dropdown-placement="bottom-end"
        data-dropdown-trigger="click|lg:click"
      >
        <button className="dropdown-toggle btn btn-icon btn-icon-lg size-9 rounded-full hover:bg-primary-light hover:text-primary dropdown-open:bg-primary-light dropdown-open:text-primary text-gray-500">
          <i className="ki-filled ki-messages"></i>
        </button>
        <div className="dropdown-content light:border-gray-300 w-full max-w-[450px]">
          <div className="">
            <div className="flex items-center justify-between gap-2.5 text-sm text-gray-900 font-semibold px-5 py-2.5">
              Chat
              <button
                className="btn btn-sm btn-icon btn-light btn-clear shrink-0"
                data-dropdown-dismiss="true"
              >
                <i className="ki-filled ki-cross"></i>
              </button>
            </div>
            <div className="border-b border-b-gray-200"></div>
            <div className="shadow-card border-b border-gray-200 py-2.5">
              <div className="flex items-center justify-between flex-wrap gap-2 px-5">
                <div className="flex items-center flex-wrap gap-2">
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-200 size-11">
                    <img
                      alt=""
                      className="size-7"
                      src="/media/brand-logos/gitlab.svg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <a
                      className="text-2sm font-semibold text-gray-900 hover:text-primary-active"
                      href="#"
                    >
                      HR Team
                    </a>
                    <span className="text-2xs font-medium italic text-gray-500">
                      Jessy is typing..
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex -space-x-2">
                    <div className="flex">
                      <img
                        className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                        src="/media/avatars/300-4.png"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                        src="/media/avatars/300-1.png"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                        src="/media/avatars/300-2.png"
                      />
                    </div>
                    <div className="flex">
                      <span className="hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs size-[30px] text-success-inverse size-6 ring-success-light bg-success">
                        +10
                      </span>
                    </div>
                  </div>
                  <div className="menu" data-menu="true">
                    <div
                      className="menu-item"
                      data-menu-item-offset="0, 10px"
                      data-menu-item-placement="bottom-end"
                      data-menu-item-toggle="dropdown"
                      data-menu-item-trigger="click|lg:hover"
                    >
                      <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                        <i className="ki-filled ki-dots-vertical"></i>
                      </button>
                      <div
                        className="menu-dropdown menu-default w-full max-w-[175px]"
                        data-menu-dismiss="true"
                      >
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/members/teams.html"
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-users"></i>
                            </span>
                            <span className="menu-title">Invite Users</span>
                          </a>
                        </div>
                        <div
                          className="menu-item"
                          data-menu-item-offset="-15px, 0"
                          data-menu-item-placement="right-start"
                          data-menu-item-toggle="dropdown"
                          data-menu-item-trigger="click|lg:hover"
                        >
                          <div className="menu-link">
                            <span className="menu-icon">
                              <i className="ki-filled ki-people"></i>
                            </span>
                            <span className="menu-title">Team</span>
                            <span className="menu-arrow">
                              <i className="ki-filled ki-right text-3xs"></i>
                            </span>
                          </div>
                          <div className="menu-dropdown menu-default w-full max-w-[175px]">
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                href="html/demo1/account/members/import-members.html"
                              >
                                <span className="menu-icon">
                                  <i className="ki-filled ki-shield-search"></i>
                                </span>
                                <span className="menu-title">Find Members</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                href="html/demo1/account/members/import-members.html"
                              >
                                <span className="menu-icon">
                                  <i className="ki-filled ki-calendar"></i>
                                </span>
                                <span className="menu-title">Meetings</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                href="html/demo1/account/members/import-members.html"
                              >
                                <span className="menu-icon">
                                  <i className="ki-filled ki-filter-edit"></i>
                                </span>
                                <span className="menu-title">
                                  Group Settings
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/security/privacy-settings.html"
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-setting-3"></i>
                            </span>
                            <span className="menu-title">Settings</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="scrollable-y-auto"
            data-scrollable="true"
            data-scrollable-dependencies="#header"
            data-scrollable-max-height="auto"
            data-scrollable-offset="280px"
          >
            <div className="flex flex-col gap-5 py-5">
              <div className="flex items-end gap-3.5 px-5">
                <img
                  alt=""
                  className="rounded-full size-9"
                  src="/media/avatars/300-5.png"
                />
                <div className="flex flex-col gap-1.5">
                  <div className="card shadow-none flex flex-col bg-gray-100 gap-2.5 p-3 rounded-bl-none">
                    <p className="text-2sm font-medium text-gray-700">
                      Hello!
                      <br />
                      Next week we are closing the project. Do You have
                      questions?
                    </p>
                  </div>
                  <span className="text-2xs font-medium text-gray-500">
                    14:04
                  </span>
                </div>
              </div>
              <div className="flex items-end justify-end gap-3.5 px-5">
                <div className="flex flex-col gap-1.5">
                  <div className="card shadow-none flex bg-primary flex-col gap-2.5 p-3 rounded-br-none">
                    <p className="text-2sm font-medium text-light">
                      This is excellent news!
                    </p>
                  </div>
                  <div className="flex items-center justify-end relative">
                    <span className="text-2xs font-medium text-gray-600 mr-6">
                      14:08
                    </span>
                    <i className="ki-filled ki-double-check text-lg absolute text-success"></i>
                  </div>
                </div>
                <div className="relative shrink-0">
                  <img
                    alt=""
                    className="rounded-full size-9"
                    src="/media/avatars/300-2.png"
                  />
                  <span className="size-[4.8px] badge badge-circle badge-success absolute top-7 end-0 transform -translate-y-1/2"></span>
                </div>
              </div>
              <div className="flex items-end gap-3.5 px-5">
                <img
                  alt=""
                  className="rounded-full size-9"
                  src="/media/avatars/300-4.png"
                />
                <div className="flex flex-col gap-1.5">
                  <div className="card shadow-none flex flex-col bg-gray-100 gap-2.5 p-3 rounded-bl-none">
                    <p className="text-2sm font-medium text-gray-700">
                      I have checked the features, can not wait to demo them!
                    </p>
                  </div>
                  <span className="text-2xs font-medium text-gray-500">
                    14:26
                  </span>
                </div>
              </div>
              <div className="flex items-end gap-3.5 px-5">
                <img
                  alt=""
                  className="rounded-full size-9"
                  src="/media/avatars/300-1.png"
                />
                <div className="flex flex-col gap-1.5">
                  <div className="card shadow-none flex flex-col bg-gray-100 gap-2.5 p-3 rounded-bl-none">
                    <p className="text-2sm font-medium text-gray-700">
                      I have looked over the rollout plan, and everything seems
                      spot on. I am ready on my end and can not wait for the
                      user feedback.
                    </p>
                  </div>
                  <span className="text-2xs font-medium text-gray-500">
                    15:09
                  </span>
                </div>
              </div>
              <div className="flex items-end justify-end gap-3.5 px-5">
                <div className="flex flex-col gap-1.5">
                  <div className="card shadow-none flex bg-primary flex-col gap-2.5 p-3 rounded-br-none">
                    <p className="text-2sm font-medium text-light">
                      Haven't seen the build yet, I'll look now.
                    </p>
                  </div>
                  <div className="flex items-center justify-end relative">
                    <span className="text-2xs font-medium text-gray-600 mr-6">
                      15:52
                    </span>
                    <i className="ki-filled ki-double-check text-lg absolute text-gray-400"></i>
                  </div>
                </div>
                <div className="relative shrink-0">
                  <img
                    alt=""
                    className="rounded-full size-9"
                    src="/media/avatars/300-2.png"
                  />
                  <span className="size-[4.8px] badge badge-circle badge-success absolute top-7 end-0 transform -translate-y-1/2"></span>
                </div>
              </div>
              <div className="flex items-end justify-end gap-3.5 px-5">
                <div className="flex flex-col gap-1.5">
                  <div className="card shadow-none flex bg-primary flex-col gap-2.5 p-3 rounded-br-none">
                    <p className="text-2sm font-medium text-light">
                      Checking the build now
                    </p>
                  </div>
                  <div className="flex items-center justify-end relative">
                    <span className="text-2xs font-medium text-gray-600 mr-6">
                      15:52
                    </span>
                    <i className="ki-filled ki-double-check text-lg absolute text-gray-400"></i>
                  </div>
                </div>
                <div className="relative shrink-0">
                  <img
                    alt=""
                    className="rounded-full size-9"
                    src="/media/avatars/300-2.png"
                  />
                  <span className="size-[4.8px] badge badge-circle badge-success absolute top-7 end-0 transform -translate-y-1/2"></span>
                </div>
              </div>
              <div className="flex items-end gap-3.5 px-5">
                <img
                  alt=""
                  className="rounded-full size-9"
                  src="/media/avatars/300-4.png"
                />
                <div className="flex flex-col gap-1.5">
                  <div className="card shadow-none flex flex-col bg-gray-100 gap-2.5 p-3 rounded-bl-none">
                    <p className="text-2sm font-medium text-gray-700">
                      Tomorrow, I will send the link for the meeting
                    </p>
                  </div>
                  <span className="text-2xs font-medium text-gray-500">
                    17:40
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-2.5">
            <div
              className="flex grow gap-2 p-5 bg-gray-100 mb-2.5"
              id="join_request"
            >
              <div className="relative shrink-0">
                <img
                  alt=""
                  className="rounded-full size-8"
                  src="/media/avatars/300-14.png"
                />
                <span className="size-1.5 badge badge-circle bg-gray-400 absolute top-7 end-0.5 ring-1 ring-light transform -translate-y-1/2"></span>
              </div>
              <div className="flex items-center justify-between gap-3 grow">
                <div className="flex flex-col">
                  <div className="text-2sm mb-px">
                    <a
                      className="hover:text-primary-active font-semibold text-gray-900"
                      href="#"
                    >
                      Jane Perez
                    </a>
                    <span className="text-gray-600">wants to join chat</span>
                  </div>
                  <span className="flex items-center text-2xs font-medium text-gray-500">
                    1 day ago
                    <span className="badge badge-circle bg-gray-500 size-1 mx-1.5"></span>
                    Design Team
                  </span>
                </div>
                <div className="flex gap-2.5">
                  <button
                    className="btn btn-light btn-xs"
                    data-dismiss="#join_request"
                  >
                    Decline
                  </button>
                  <button className="btn btn-dark btn-xs">Accept</button>
                </div>
              </div>
            </div>
            <div className="relative grow mx-5">
              <img
                alt=""
                className="rounded-full size-[30px] absolute left-0 top-2/4 -translate-y-2/4 ms-2.5"
                src="/media/avatars/300-2.png"
              />
              <input
                className="input h-auto py-4 ps-12 bg-transparent"
                placeholder="Write a message..."
                type="text"
                defaultValue=""
              />
              <div className="flex items-center gap-2.5 absolute right-3 top-1/2 -translate-y-1/2">
                <button className="btn btn-sm btn-icon btn-light btn-clear">
                  <i className="ki-filled ki-exit-up"></i>
                </button>
                <a className="btn btn-dark btn-sm" href="#">
                  Send
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="dropdown"
        data-dropdown="true"
        data-dropdown-offset="10px, 10px"
        data-dropdown-placement="bottom-end"
        data-dropdown-trigger="click|lg:click"
      >
        <button className="dropdown-toggle btn btn-icon btn-icon-lg size-9 rounded-full hover:bg-primary-light hover:text-primary dropdown-open:bg-primary-light dropdown-open:text-primary text-gray-500">
          <i className="ki-filled ki-element-11"></i>
        </button>
        <div className="dropdown-content light:border-gray-300 w-full max-w-[320px]">
          <div className="flex items-center justify-between gap-2.5 text-2xs text-gray-600 font-medium px-5 py-3 border-b border-b-gray-200">
            <span>Apps</span>
            <span>Enabled</span>
          </div>
          <div className="flex flex-col scrollable-y-auto max-h-[400px] divide-y divide-gray-200">
            <div className="flex items-center justify-between flex-wrap gap-2 px-5 py-3.5">
              <div className="flex items-center flex-wrap gap-2">
                <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-200 size-10">
                  <img
                    alt=""
                    className="size-6"
                    src="/media/brand-logos/jira.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <a
                    className="text-2sm font-semibold text-gray-900 hover:text-primary-active"
                    href="#"
                  >
                    Jira
                  </a>
                  <span className="text-2xs font-medium text-gray-600">
                    Project management
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 lg:gap-5">
                <label className="switch switch-sm">
                  <input type="checkbox" defaultValue={2} />
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-2 px-5 py-3.5">
              <div className="flex items-center flex-wrap gap-2">
                <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-200 size-10">
                  <img
                    alt=""
                    className="size-6"
                    src="/media/brand-logos/inferno.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <a
                    className="text-2sm font-semibold text-gray-900 hover:text-primary-active"
                    href="#"
                  >
                    Inferno
                  </a>
                  <span className="text-2xs font-medium text-gray-600">
                    Ensures healthcare app
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 lg:gap-5">
                <label className="switch switch-sm">
                  <input
                    defaultChecked={false}
                    type="checkbox"
                    defaultValue={1}
                  />
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-2 px-5 py-3.5">
              <div className="flex items-center flex-wrap gap-2">
                <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-200 size-10">
                  <img
                    alt=""
                    className="size-6"
                    src="/media/brand-logos/evernote.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <a
                    className="text-2sm font-semibold text-gray-900 hover:text-primary-active"
                    href="#"
                  >
                    Evernote
                  </a>
                  <span className="text-2xs font-medium text-gray-600">
                    Notes management app
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 lg:gap-5">
                <label className="switch switch-sm">
                  <input
                    defaultChecked={false}
                    type="checkbox"
                    defaultValue={1}
                  />
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-2 px-5 py-3.5">
              <div className="flex items-center flex-wrap gap-2">
                <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-200 size-10">
                  <img
                    alt=""
                    className="size-6"
                    src="/media/brand-logos/gitlab.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <a
                    className="text-2sm font-semibold text-gray-900 hover:text-primary-active"
                    href="#"
                  >
                    Gitlab
                  </a>
                  <span className="text-2xs font-medium text-gray-600">
                    DevOps platform
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 lg:gap-5">
                <label className="switch switch-sm">
                  <input type="checkbox" defaultValue={2} />
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-2 px-5 py-3.5">
              <div className="flex items-center flex-wrap gap-2">
                <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-200 size-10">
                  <img
                    alt=""
                    className="size-6"
                    src="/media/brand-logos/google-webdev.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <a
                    className="text-2sm font-semibold text-gray-900 hover:text-primary-active"
                    href="#"
                  >
                    Google webdev
                  </a>
                  <span className="text-2xs font-medium text-gray-600">
                    Building web expierences
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 lg:gap-5">
                <label className="switch switch-sm">
                  <input
                    defaultChecked={false}
                    type="checkbox"
                    defaultValue={1}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="grid p-5 border-t border-t-gray-200">
            <a
              className="btn btn-sm btn-light justify-center"
              href="html/demo1/account/api-keys.html"
            >
              Go to Apps
            </a>
          </div>
        </div>
      </div>
      <div
        className="dropdown"
        data-dropdown="true"
        data-dropdown-offset="70px, 10px"
        data-dropdown-placement="bottom-end"
        data-dropdown-trigger="click|lg:click"
      >
        <button className="dropdown-toggle btn btn-icon btn-icon-lg relative cursor-pointer size-9 rounded-full hover:bg-primary-light hover:text-primary dropdown-open:bg-primary-light dropdown-open:text-primary text-gray-500">
          <i className="ki-filled ki-notification-on"></i>
          <span className="badge badge-dot badge-success size-[5px] absolute top-0.5 right-0.5 transform translate-y-1/2"></span>
        </button>
        <div className="dropdown-content light:border-gray-300 w-full max-w-[460px]">
          <div
            className="flex items-center justify-between gap-2.5 text-sm text-gray-900 font-semibold px-5 py-2.5"
            id="notifications_header"
          >
            Notifications
            <button
              className="btn btn-sm btn-icon btn-light btn-clear shrink-0"
              data-dropdown-dismiss="true"
            >
              <i className="ki-filled ki-cross"></i>
            </button>
          </div>
          <div className="border-b border-b-gray-200"></div>
          <div
            className="tabs justify-between px-5 mb-2"
            data-tabs="true"
            id="notifications_tabs"
          >
            <div className="flex items-center gap-5">
              <button
                className="tab active"
                data-tab-toggle="#notifications_tab_all"
              >
                All
              </button>
              <button
                className="tab relative"
                data-tab-toggle="#notifications_tab_inbox"
              >
                Inbox
                <span className="badge badge-dot badge-success size-[5px] absolute top-2 right-0 transform translate-y-1/2 translate-x-full"></span>
              </button>
              <button className="tab" data-tab-toggle="#notifications_tab_team">
                Team
              </button>
              <button
                className="tab"
                data-tab-toggle="#notifications_tab_following"
              >
                Following
              </button>
            </div>
            <div className="menu" data-menu="true">
              <div
                className="menu-item"
                data-menu-item-offset="0, 10px"
                data-menu-item-placement="bottom-end"
                data-menu-item-toggle="dropdown"
                data-menu-item-trigger="click|lg:hover"
              >
                <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                  <i className="ki-filled ki-setting-2"></i>
                </button>
                <div
                  className="menu-dropdown menu-default w-full max-w-[175px]"
                  data-menu-dismiss="true"
                >
                  <div className="menu-item">
                    <a className="menu-link" href="#">
                      <span className="menu-icon">
                        <i className="ki-filled ki-document"></i>
                      </span>
                      <span className="menu-title">View</span>
                    </a>
                  </div>
                  <div
                    className="menu-item"
                    data-menu-item-offset="-15px, 0"
                    data-menu-item-placement="right-start"
                    data-menu-item-toggle="dropdown"
                    data-menu-item-trigger="click|lg:hover"
                  >
                    <div className="menu-link">
                      <span className="menu-icon">
                        <i className="ki-filled ki-notification-status"></i>
                      </span>
                      <span className="menu-title">Export</span>
                      <span className="menu-arrow">
                        <i className="ki-filled ki-right text-3xs"></i>
                      </span>
                    </div>
                    <div className="menu-dropdown menu-default w-full max-w-[175px]">
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="html/demo1/account/home/settings-sidebar.html"
                        >
                          <span className="menu-icon">
                            <i className="ki-filled ki-sms"></i>
                          </span>
                          <span className="menu-title">Email</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="html/demo1/account/home/settings-sidebar.html"
                        >
                          <span className="menu-icon">
                            <i className="ki-filled ki-message-notify"></i>
                          </span>
                          <span className="menu-title">SMS</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="html/demo1/account/home/settings-sidebar.html"
                        >
                          <span className="menu-icon">
                            <i className="ki-filled ki-notification-status"></i>
                          </span>
                          <span className="menu-title">Push</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link" href="#">
                      <span className="menu-icon">
                        <i className="ki-filled ki-pencil"></i>
                      </span>
                      <span className="menu-title">Edit</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link" href="#">
                      <span className="menu-icon">
                        <i className="ki-filled ki-trash"></i>
                      </span>
                      <span className="menu-title">Delete</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grow" id="notifications_tab_all">
            <div className="flex flex-col">
              <div
                className="scrollable-y-auto"
                data-scrollable="true"
                data-scrollable-dependencies="#header"
                data-scrollable-max-height="auto"
                data-scrollable-offset="200px"
              >
                <div className="flex flex-col gap-5 pt-3 pb-4 divider-y divider-gray-200">
                  <div className="flex grow gap-2.5 px-5">
                    <div className="relative shrink-0 mt-0.5">
                      <img
                        alt=""
                        className="rounded-full size-8"
                        src="/media/avatars/300-4.png"
                      />
                      <span className="size-1.5 badge badge-circle badge-success absolute top-7 end-0.5 ring-1 ring-light transform -translate-y-1/2"></span>
                    </div>
                    <div className="flex flex-col gap-3.5">
                      <div className="flex flex-col gap-1">
                        <div className="text-2sm font-medium">
                          <a
                            className="hover:text-primary-active text-gray-900 font-semibold"
                            href="#"
                          >
                            Joe Lincoln
                          </a>
                          <span className="text-gray-700">
                            mentioned you in
                          </span>
                          <a
                            className="hover:text-primary-active text-primary"
                            href="#"
                          >
                            Latest Trends
                          </a>
                          <span className="text-gray-700">topic</span>
                        </div>
                        <span className="flex items-center text-2xs font-medium text-gray-500">
                          18 mins ago
                          <span className="badge badge-circle bg-gray-500 size-1 mx-1.5"></span>
                          Web Design 2024
                        </span>
                      </div>
                      <div className="card shadow-none flex flex-col gap-2.5 p-3.5 rounded-lg bg-light-active">
                        <div className="text-2sm font-semibold text-gray-600 mb-px">
                          <a
                            className="hover:text-primary-active text-gray-900 font-semibold"
                            href="#"
                          >
                            @Cody
                          </a>
                          <span className="text-gray-700 font-medium">
                            For an expert opinion, check out what Mike has to
                            say on this topic!
                          </span>
                        </div>
                        <label className="input input-sm">
                          <input
                            placeholder="Reply"
                            type="text"
                            defaultValue=""
                          />
                          <button className="btn btn-icon">
                            <i className="ki-filled ki-picture"></i>
                          </button>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-b-gray-200"></div>
                  <div className="flex grow gap-2.5 px-5">
                    <div className="relative shrink-0 mt-0.5">
                      <img
                        alt=""
                        className="rounded-full size-8"
                        src="/media/avatars/300-5.png"
                      />
                      <span className="size-1.5 badge badge-circle badge-success absolute top-7 end-0.5 ring-1 ring-light transform -translate-y-1/2"></span>
                    </div>
                    <div className="flex flex-col gap-3.5">
                      <div className="flex flex-col gap-1">
                        <div className="text-2sm font-medium mb-px">
                          <a
                            className="hover:text-primary-active text-gray-900 font-semibold"
                            href="#"
                          >
                            Leslie Alexander
                          </a>
                          <span className="text-gray-700">
                            added new tags to
                          </span>
                          <a
                            className="hover:text-primary-active text-primary"
                            href="#"
                          >
                            Web Redesign 2024
                          </a>
                        </div>
                        <span className="flex items-center text-2xs font-medium text-gray-500">
                          53 mins ago
                          <span className="badge badge-circle bg-gray-500 size-1 mx-1.5"></span>
                          ACME
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        <span className="badge badge-sm badge-info badge-outline">
                          Client-Request
                        </span>
                        <span className="badge badge-sm badge-warning badge-outline">
                          Figma
                        </span>
                        <span className="badge badge-sm badge-light badge-outline">
                          Redesign
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-b-gray-200"></div>
                  <div
                    className="flex grow gap-2.5 px-5"
                    id="notification_request_3"
                  >
                    <div className="relative shrink-0 mt-0.5">
                      <img
                        alt=""
                        className="rounded-full size-8"
                        src="/media/avatars/300-27.png"
                      />
                      <span className="size-1.5 badge badge-circle bg-gray-400 absolute top-7 end-0.5 ring-1 ring-light transform -translate-y-1/2"></span>
                    </div>
                    <div className="flex flex-col gap-3.5">
                      <div className="flex flex-col gap-1">
                        <div className="text-2sm font-medium mb-px">
                          <a
                            className="hover:text-primary-active text-gray-900 font-semibold"
                            href="#"
                          >
                            Guy Hawkins
                          </a>
                          <span className="text-gray-700">
                            requested access to
                          </span>
                          <a
                            className="hover:text-primary-active text-primary"
                            href="#"
                          >
                            AirSpace
                          </a>
                          <span className="text-gray-700">project</span>
                        </div>
                        <span className="flex items-center text-2xs font-medium text-gray-500">
                          14 hours ago
                          <span className="badge badge-circle bg-gray-500 size-1 mx-1.5"></span>
                          Dev Team
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        <button
                          className="btn btn-light btn-sm"
                          data-dismiss="#notification_request_3"
                        >
                          Decline
                        </button>
                        <button
                          className="btn btn-dark btn-sm"
                          data-dismiss="#notification_request_3"
                        >
                          Accept
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-b-gray-200"></div>
                  <div className="flex grow gap-2.5 px-5">
                    <div className="relative shrink-0 mt-0.5">
                      <img
                        alt=""
                        className="rounded-full size-8"
                        src="/media/avatars/300-1.png"
                      />
                      <span className="size-1.5 badge badge-circle bg-gray-400 absolute top-7 end-0.5 ring-1 ring-light transform -translate-y-1/2"></span>
                    </div>
                    <div className="flex flex-col gap-3.5 grow">
                      <div className="flex flex-col gap-1">
                        <div className="text-2sm font-medium mb-px">
                          <a
                            className="hover:text-primary-active text-gray-900 font-semibold"
                            href="#"
                          >
                            Jane Perez
                          </a>
                          <span className="text-gray-700">
                            invites you to review a file.
                          </span>
                        </div>
                        <span className="flex items-center text-2xs font-medium text-gray-500">
                          3 hours ago
                          <span className="badge badge-circle bg-gray-500 size-1 mx-1.5"></span>
                          742kb
                        </span>
                      </div>
                      <div className="card shadow-none flex items-center flex-row gap-1.5 p-2.5 rounded-lg bg-light-active">
                        <img className="h-5" src="/media/file-types/pdf.svg" />
                        <a
                          className="hover:text-primary-active font-medium text-gray-700 text-xs me-1"
                          href="#"
                        >
                          Launch_nov24.pptx
                        </a>
                        <span className="font-medium text-gray-500 text-2xs">
                          Edited 39 mins ago
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-b-gray-200"></div>
                  <div className="flex grow gap-2.5 px-5">
                    <div className="relative shrink-0 mt-0.5">
                      <img
                        alt=""
                        className="rounded-full size-8"
                        src="/media/avatars/300-11.png"
                      />
                      <span className="size-1.5 badge badge-circle badge-success absolute top-7 end-0.5 ring-1 ring-light transform -translate-y-1/2"></span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-2sm font-medium mb-px">
                        <a
                          className="hover:text-primary-active text-gray-900 font-semibold"
                          href="#"
                        >
                          Raymond Pawell
                        </a>
                        <span className="text-gray-700">
                          posted a new article
                        </span>
                        <a
                          className="hover:text-primary-active text-primary"
                          href="#"
                        >
                          2024 Roadmap
                        </a>
                      </div>
                      <span className="flex items-center text-2xs font-medium text-gray-500">
                        1 hour ago
                        <span className="badge badge-circle bg-gray-500 size-1 mx-1.5"></span>
                        Roadmap
                      </span>
                    </div>
                  </div>
                  <div className="border-b border-b-gray-200"></div>
                  <div className="flex grow gap-2.5 px-5">
                    <div className="relative shrink-0 mt-0.5">
                      <img
                        alt=""
                        className="rounded-full size-8"
                        src="/media/avatars/300-14.png"
                      />
                      <span className="size-1.5 badge badge-circle bg-gray-400 absolute top-7 end-0.5 ring-1 ring-light transform -translate-y-1/2"></span>
                    </div>
                    <div className="flex flex-col gap-3.5 grow">
                      <div className="flex flex-col gap-1">
                        <div className="text-2sm font-medium mb-px">
                          <a
                            className="hover:text-primary-active text-gray-900 font-semibold"
                            href="#"
                          >
                            Jane Perez
                          </a>
                          <span className="text-gray-700">
                            wants to view your design project
                          </span>
                        </div>
                        <span className="flex items-center text-2xs font-medium text-gray-500">
                          3 day ago
                          <span className="badge badge-circle bg-gray-500 size-1 mx-1.5"></span>
                          Metronic Launcher mockups
                        </span>
                      </div>
                      <div className="card shadow-none flex items-center flex-row gap-1.5 p-2.5 rounded-lg bg-light-active">
                        <div className="flex items-center justify-center w-[26px] h-[30px] shrink-0 bg-light rounded border border-gray-200">
                          <img
                            className="h-5"
                            src="/media/file-types/figma.svg"
                          />
                        </div>
                        <a
                          className="hover:text-primary-active font-medium text-gray-700 text-xs me-1"
                          href="#"
                        >
                          Launcher-UIkit.fig
                        </a>
                        <span className="font-medium text-gray-500 text-2xs">
                          Edited 2 mins ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b border-b-gray-200"></div>
              <div
                className="grid grid-cols-2 p-5 gap-2.5"
                id="notifications_all_footer"
              >
                <button className="btn btn-sm btn-light justify-center">
                  Archive all
                </button>
                <button className="btn btn-sm btn-light justify-center">
                  Mark all as read
                </button>
              </div>
            </div>
          </div>
          <div className="grow hidden" id="notifications_tab_inbox">
            <div className="flex flex-col">
              <div
                className="scrollable-y-auto"
                data-scrollable="true"
                data-scrollable-dependencies="#header"
                data-scrollable-max-height="auto"
                data-scrollable-offset="200px"
              >
                <div className="flex flex-col gap-5 pt-3 pb-4">
                  <div
                    className="flex grow gap-2.5 px-5"
                    id="notification_request_13"
                  >
                    <div className="relative shrink-0 mt-0.5">
                      <img
                        alt=""
                        className="rounded-full size-8"
                        src="/media/avatars/300-25.png"
                      />
                      <span className="size-1.5 badge badge-circle badge-success absolute top-7 end-0.5 ring-1 ring-light transform -translate-y-1/2"></span>
                    </div>
                    <div className="flex flex-col gap-3.5 grow">
                      <div className="flex flex-col gap-1">
                        <div className="text-2sm font-medium mb-px">
                          <a
                            className="hover:text-primary-active text-gray-900 font-semibold"
                            href="#"
                          >
                            Samuel Lee
                          </a>
                          <span className="text-gray-700">
                            requested to add user to
                          </span>
                          <a
                            className="hover:text-primary-active text-primary font-semibold"
                            href="#"
                          >
                            TechSynergy
                          </a>
                        </div>
                        <span className="flex items-center text-2xs font-medium text-gray-500">
                          22 hours ago
                          <span className="badge badge-circle bg-gray-500 size-1 mx-1.5"></span>
                          Dev Team
                        </span>
                      </div>
                      <div className="card shadow-none flex items-center flex-row justify-between gap-1.5 px-2.5 py-2 rounded-lg bg-light-active">
                        <div className="flex flex-col">
                          <a
                            className="hover:text-primary-active font-medium text-gray-900 text-xs"
                            href="#"
                          >
                            Ronald Richards
                          </a>
                          <a
                            className="hover:text-primary-active text-gray-500 font-medium text-3xs"
                            href="#"
                          >
                            ronald.richards@gmail.com
                          </a>
                        </div>
                        <a
                          className="hover:text-primary-active text-gray-700 font-medium text-xs"
                          href="#"
                        >
                          Go to profile
                        </a>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        <button
                          className="btn btn-light btn-sm"
                          data-dismiss="#notification_request_13"
                        >
                          Decline
                        </button>
                        <button
                          className="btn btn-dark btn-sm"
                          data-dismiss="#notification_request_13"
                        >
                          Accept
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-b-gray-200"></div>
                  <div className="flex items-center grow gap-2.5 px-5">
                    <div className="flex items-center justify-center size-8 bg-success-light rounded-full border border-success-clarity">
                      <i className="ki-filled ki-check text-lg text-success"></i>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-2sm font-medium text-gray-700">
                        You have succesfully verified your account
                      </span>
                      <span className="font-medium text-gray-500 text-2xs">
                        2 days ago
                      </span>
                    </div>
                  </div>
                  <div className="border-b border-b-gray-200"></div>
                  <div className="flex grow gap-2.5 px-5">
                    <div className="relative shrink-0 mt-0.5">
                      <img
                        alt=""
                        className="rounded-full size-8"
                        src="/media/avatars/300-34.png"
                      />
                      <span className="size-1.5 badge badge-circle bg-gray-400 absolute top-7 end-0.5 ring-1 ring-light transform -translate-y-1/2"></span>
                    </div>
                    <div className="flex flex-col gap-3.5 grow">
                      <div className="flex flex-col gap-1">
                        <div className="text-2sm font-medium mb-px">
                          <a
                            className="hover:text-primary-active text-gray-900 font-semibold"
                            href="#"
                          >
                            Ava Peterson
                          </a>
                          <span className="text-gray-700">
                            uploaded attachment
                          </span>
                        </div>
                        <span className="flex items-center text-2xs font-medium text-gray-500">
                          3 days ago
                          <span className="badge badge-circle bg-gray-500 size-1 mx-1.5"></span>
                          ACME
                        </span>
                      </div>
                      <div className="card shadow-none flex items-center justify-between flex-row gap-1.5 p-2.5 rounded-lg bg-light-active">
                        <div className="flex items-center gap-1.5">
                          <img
                            className="h-6"
                            src="/media/file-types/xls.svg"
                          />
                          <div className="flex flex-col gap-0.5">
                            <a
                              className="hover:text-primary-active font-medium text-gray-700 text-xs"
                              href="#"
                            >
                              Redesign-2024.xls
                            </a>
                            <span className="font-medium text-gray-500 text-2xs">
                              2.6 MB
                            </span>
                          </div>
                        </div>
                        <button className="btn btn-icon btn-xs btn-clear btn-light">
                          <svg
                            fill="none"
                            height={14}
                            viewBox="0 0 14 14"
                            width={14}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              d="M6.63821 2.60467C4.81926 2.60467 3.32474 3.99623 3.16201 5.77252C3.1386 6.02803 2.92413 6.22253 2.66871 6.22227C1.74915 6.22149 0.976744 6.9868 0.976744 7.90442C0.976744 8.83344 1.72988 9.58657 2.65891 9.58657H3.09302C3.36274 9.58657 3.5814 9.80523 3.5814 10.0749C3.5814 10.3447 3.36274 10.5633 3.09302 10.5633H2.65891C1.19044 10.5633 0 9.37292 0 7.90442C0 6.58614 0.986948 5.48438 2.24496 5.27965C2.62863 3.20165 4.44941 1.62793 6.63821 1.62793C8.26781 1.62793 9.69282 2.50042 10.4729 3.80193C12.3411 3.72829 14 5.2564 14 7.18091C14 8.93508 12.665 10.3769 10.9552 10.5466C10.6868 10.5733 10.4476 10.3773 10.421 10.1089C10.3943 9.84052 10.5903 9.60135 10.8587 9.57465C12.0739 9.45406 13.0233 8.42802 13.0233 7.18091C13.0233 5.74002 11.6905 4.59666 10.2728 4.79968C10.0642 4.82957 9.85672 4.72382 9.76028 4.53181C9.18608 3.38796 8.00318 2.60467 6.63821 2.60467Z"
                              fill="#99A1B7"
                              fillRule="evenodd"
                            ></path>
                            <path
                              clipRule="evenodd"
                              d="M6.99909 8.01611L8.28162 9.29864C8.47235 9.48937 8.78158 9.48937 8.97231 9.29864C9.16303 9.10792 9.16303 8.79874 8.97231 8.60802L7.57465 7.2103C7.25675 6.89247 6.74143 6.89247 6.42353 7.2103L5.02585 8.60802C4.83513 8.79874 4.83513 9.10792 5.02585 9.29864C5.21657 9.48937 5.5258 9.48937 5.71649 9.29864L6.99909 8.01611Z"
                              fill="#99A1B7"
                              fillRule="evenodd"
                            ></path>
                            <path
                              clipRule="evenodd"
                              d="M7.00009 12.372C7.2698 12.372 7.48846 12.1533 7.48846 11.8836V7.97665C7.48846 7.70694 7.2698 7.48828 7.00009 7.48828C6.73038 7.48828 6.51172 7.70694 6.51172 7.97665V11.8836C6.51172 12.1533 6.73038 12.372 7.00009 12.372Z"
                              fill="#99A1B7"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-b-gray-200"></div>
                  <div className="flex grow gap-2 px-5">
                    <div className="relative shrink-0 mt-0.5">
                      <img
                        alt=""
                        className="rounded-full size-8"
                        src="/media/avatars/300-29.png"
                      />
                      <span className="size-1.5 badge badge-circle bg-gray-400 absolute top-7 end-0.5 ring-1 ring-light transform -translate-y-1/2"></span>
                    </div>
                    <div className="flex flex-col gap-3 grow">
                      <div className="flex flex-col gap-1">
                        <div className="text-2sm font-medium mb-px">
                          <a
                            className="hover:text-primary-active text-gray-900 font-semibold"
                            href="#"
                          >
                            Ethan Parker
                          </a>
                          <span className="text-gray-700">
                            created a new tasks to
                          </span>
                          <a
                            className="hover:text-primary-active text-primary"
                            href="#"
                          >
                            Site Sculpt
                          </a>
                          <span className="text-gray-700">project</span>
                        </div>
                        <span className="flex items-center text-2xs font-medium text-gray-500">
                          3 days ago
                          <span className="badge badge-circle bg-gray-500 size-1 mx-1.5"></span>
                          Web Designer
                        </span>
                      </div>
                      <div className="card shadow-none p-3.5 gap-3.5 rounded-lg bg-light-active">
                        <div className="flex items-center justify-between flex-wrap gap-2.5">
                          <div className="flex flex-col gap-1">
                            <span className="font-medium text-gray-900 text-xs">
                              Location history is erased after Logging In
                            </span>
                            <span className="font-medium text-gray-500 text-3xs">
                              Due Date: 15 May, 2024
                            </span>
                          </div>
                          <div className="flex -space-x-2">
                            <div className="flex">
                              <img
                                className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                                src="/media/avatars/300-3.png"
                              />
                            </div>
                            <div className="flex">
                              <img
                                className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                                src="/media/avatars/300-2.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <span className="badge badge-sm badge-success badge-outline">
                            Improvement
                          </span>
                          <span className="badge badge-sm badge-danger badge-outline">
                            Bug
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-b-gray-200"></div>
                  <div
                    className="flex grow gap-2.5 px-5"
                    id="notification_request_3"
                  >
                    <div className="relative shrink-0 mt-0.5">
                      <img
                        alt=""
                        className="rounded-full size-8"
                        src="/media/avatars/300-30.png"
                      />
                      <span className="size-1.5 badge badge-circle bg-gray-400 absolute top-7 end-0.5 ring-1 ring-light transform -translate-y-1/2"></span>
                    </div>
                    <div className="flex flex-col gap-3.5">
                      <div className="flex flex-col gap-1">
                        <div className="text-2sm font-medium mb-px">
                          <a
                            className="hover:text-primary-active text-gray-900 font-semibold"
                            href="#"
                          >
                            Benjamin Harris
                          </a>
                          <span className="text-gray-700">
                            requested to upgrade plan
                          </span>
                          <a
                            className="hover:text-primary-active text-primary"
                            href="#"
                          ></a>
                          <span className="text-gray-700"></span>
                        </div>
                        <span className="flex items-center text-2xs font-medium text-gray-500">
                          4 days ago
                          <span className="badge badge-circle bg-gray-500 size-1 mx-1.5"></span>
                          Marketing
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        <button
                          className="btn btn-light btn-sm"
                          data-dismiss="#notification_request_3"
                        >
                          Decline
                        </button>
                        <button
                          className="btn btn-dark btn-sm"
                          data-dismiss="#notification_request_3"
                        >
                          Accept
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-b-gray-200"></div>
                  <div className="flex grow gap-2.5 px-5">
                    <div className="relative shrink-0 mt-0.5">
                      <img
                        alt=""
                        className="rounded-full size-8"
                        src="/media/avatars/300-24.png"
                      />
                      <span className="size-1.5 badge badge-circle badge-success absolute top-7 end-0.5 ring-1 ring-light transform -translate-y-1/2"></span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-2sm font-medium mb-px">
                        <a
                          className="hover:text-primary-active text-gray-900 font-semibold"
                          href="#"
                        >
                          Isaac Morgan
                        </a>
                        <span className="text-gray-700">mentioned you in</span>
                        <a
                          className="hover:text-primary-active text-primary"
                          href="#"
                        >
                          Data Transmission
                        </a>
                        topic
                      </div>
                      <span className="flex items-center text-2xs font-medium text-gray-500">
                        6 days ago
                        <span className="badge badge-circle bg-gray-500 size-1 mx-1.5"></span>
                        Dev Team
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b border-b-gray-200"></div>
              <div
                className="grid grid-cols-2 p-5 gap-2.5"
                id="notifications_inbox_footer"
              >
                <button className="btn btn-sm btn-light justify-center">
                  Archive all
                </button>
                <button className="btn btn-sm btn-light justify-center">
                  Mark all as read
                </button>
              </div>
            </div>
          </div>
          <div className="grow hidden" id="notifications_tab_team">
            <div className="flex flex-col">
              <div
                className="scrollable-y-auto"
                data-scrollable="true"
                data-scrollable-dependencies="#header"
                data-scrollable-max-height="auto"
                data-scrollable-offset="200px"
              >
                <div className="flex flex-col gap-5 pt-3 pb-4">
                  <div className="flex grow gap-2 px-5">
                    <div className="relative shrink-0 mt-0.5">
                      <img
                        alt=""
                        className="rounded-full size-8"
                        src="/media/avatars/300-15.png"
                      />
                      <span className="size-1.5 badge badge-circle bg-gray-400 absolute top-7 end-0.5 ring-1 ring-light transform -translate-y-1/2"></span>
                    </div>
                    <div
                      className="flex flex-col gap-3 grow"
                      id="notification_request_10"
                    >
                      <div className="flex flex-col gap-1">
                        <div className="text-2sm font-medium mb-px">
                          <a
                            className="hover:text-primary-active text-gray-900 font-semibold"
                            href="#"
                          >
                            Nova Hawthorne
                          </a>
                          <span className="text-gray-700">
                            sent you an meeting invation
                          </span>
                        </div>
                        <span className="flex items-center text-2xs font-medium text-gray-500">
                          2 days ago
                          <span className="badge badge-circle bg-gray-500 size-1 mx-1.5"></span>
                          Dev Team
                        </span>
                      </div>
                      <div className="card shadow-none p-2.5 rounded-lg bg-light-active">
                        <div className="flex items-center justify-between flex-wrap gap-2.5">
                          <div className="flex items-center gap-2.5">
                            <div className="border border-brand-clarity rounded-lg">
                              <div className="flex items-center justify-center border-b border-b-brand-clarity bg-brand-light rounded-t-lg">
                                <span className="text-3xs text-brand fw-medium p-1.5">
                                  Apr
                                </span>
                              </div>
                              <div className="flex items-center justify-center size-9">
                                <span className="fw-semibold text-gray-900 text-md tracking-tight">
                                  12
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <a
                                className="hover:text-primary-active font-medium text-gray-700 text-xs"
                                href="#"
                              >
                                Peparation For Release
                              </a>
                              <span className="font-medium text-gray-600 text-2xs">
                                9:00 PM - 10:00 PM
                              </span>
                            </div>
                          </div>
                          <div className="flex -space-x-2">
                            <div className="flex">
                              <img
                                className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                                src="/media/avatars/300-4.png"
                              />
                            </div>
                            <div className="flex">
                              <img
                                className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                                src="/media/avatars/300-1.png"
                              />
                            </div>
                            <div className="flex">
                              <img
                                className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                                src="/media/avatars/300-2.png"
                              />
                            </div>
                            <div className="flex">
                              <span className="hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs size-6 text-success-inverse size-6 ring-success-light bg-success">
                                +3
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        <button
                          className="btn btn-light btn-sm"
                          data-dismiss="#notification_request_10"
                        >
                          Decline
                        </button>
                        <button
                          className="btn btn-dark btn-sm"
                          data-dismiss="#notification_request_10"
                        >
                          Accept
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-b-gray-200"></div>
                  <div className="flex grow gap-2.5 px-5">
                    <div className="relative shrink-0 mt-0.5">
                      <img
                        alt=""
                        className="rounded-full size-8"
                        src="/media/avatars/300-6.png"
                      />
                      <span className="size-1.5 badge badge-circle absolute top-7 end-0.5 ring-1 ring-light transform -translate-y-1/2"></span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-2sm font-medium mb-px">
                        <a
                          className="hover:text-primary-active text-gray-900 font-semibold"
                          href="#"
                        >
                          Adrian Vale
                        </a>
                        <span className="text-gray-700">
                          change the due date of
                        </span>
                        <a
                          className="hover:text-primary-active text-primary"
                          href="#"
                        >
                          Marketing
                        </a>
                        to 13 May
                      </div>
                      <span className="flex items-center text-2xs font-medium text-gray-500">
                        2 days ago
                        <span className="badge badge-circle bg-gray-500 size-1 mx-1.5"></span>
                        Marketing
                      </span>
                    </div>
                  </div>
                  <div className="border-b border-b-gray-200"></div>
                  <div className="flex grow gap-2.5 px-5">
                    <div className="relative shrink-0 mt-0.5">
                      <img
                        alt=""
                        className="rounded-full size-8"
                        src="/media/avatars/300-12.png"
                      />
                      <span className="size-1.5 badge badge-circle badge-success absolute top-7 end-0.5 ring-1 ring-light transform -translate-y-1/2"></span>
                    </div>
                    <div className="flex flex-col gap-3.5 grow">
                      <div className="flex flex-col gap-1">
                        <div className="text-2sm font-medium mb-px">
                          <a
                            className="hover:text-primary-active text-gray-900 font-semibold"
                            href="#"
                          >
                            Skylar Frost
                          </a>
                          <span className="text-gray-700">
                            uploaded 2 attachments
                          </span>
                        </div>
                        <span className="flex items-center text-2xs font-medium text-gray-500">
                          3 days ago
                          <span className="badge badge-circle bg-gray-500 size-1 mx-1.5"></span>
                          Web Design
                        </span>
                      </div>
                      <div className="card shadow-none flex items-center justify-between flex-row gap-1.5 p-2.5 rounded-lg bg-light-active">
                        <div className="flex items-center gap-1.5">
                          <img
                            className="h-6"
                            src="/media/file-types/word.svg"
                          />
                          <div className="flex flex-col gap-0.5">
                            <a
                              className="hover:text-primary-active font-medium text-gray-700 text-xs"
                              href="#"
                            >
                              Landing-page.docx
                            </a>
                            <span className="font-medium text-gray-500 text-2xs">
                              1.9 MB
                            </span>
                          </div>
                        </div>
                        <button className="btn btn-icon btn-xs btn-clear btn-light">
                          <svg
                            fill="none"
                            height={14}
                            viewBox="0 0 14 14"
                            width={14}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              d="M6.63821 2.60467C4.81926 2.60467 3.32474 3.99623 3.16201 5.77252C3.1386 6.02803 2.92413 6.22253 2.66871 6.22227C1.74915 6.22149 0.976744 6.9868 0.976744 7.90442C0.976744 8.83344 1.72988 9.58657 2.65891 9.58657H3.09302C3.36274 9.58657 3.5814 9.80523 3.5814 10.0749C3.5814 10.3447 3.36274 10.5633 3.09302 10.5633H2.65891C1.19044 10.5633 0 9.37292 0 7.90442C0 6.58614 0.986948 5.48438 2.24496 5.27965C2.62863 3.20165 4.44941 1.62793 6.63821 1.62793C8.26781 1.62793 9.69282 2.50042 10.4729 3.80193C12.3411 3.72829 14 5.2564 14 7.18091C14 8.93508 12.665 10.3769 10.9552 10.5466C10.6868 10.5733 10.4476 10.3773 10.421 10.1089C10.3943 9.84052 10.5903 9.60135 10.8587 9.57465C12.0739 9.45406 13.0233 8.42802 13.0233 7.18091C13.0233 5.74002 11.6905 4.59666 10.2728 4.79968C10.0642 4.82957 9.85672 4.72382 9.76028 4.53181C9.18608 3.38796 8.00318 2.60467 6.63821 2.60467Z"
                              fill="#99A1B7"
                              fillRule="evenodd"
                            ></path>
                            <path
                              clipRule="evenodd"
                              d="M6.99909 8.01611L8.28162 9.29864C8.47235 9.48937 8.78158 9.48937 8.97231 9.29864C9.16303 9.10792 9.16303 8.79874 8.97231 8.60802L7.57465 7.2103C7.25675 6.89247 6.74143 6.89247 6.42353 7.2103L5.02585 8.60802C4.83513 8.79874 4.83513 9.10792 5.02585 9.29864C5.21657 9.48937 5.5258 9.48937 5.71649 9.29864L6.99909 8.01611Z"
                              fill="#99A1B7"
                              fillRule="evenodd"
                            ></path>
                            <path
                              clipRule="evenodd"
                              d="M7.00009 12.372C7.2698 12.372 7.48846 12.1533 7.48846 11.8836V7.97665C7.48846 7.70694 7.2698 7.48828 7.00009 7.48828C6.73038 7.48828 6.51172 7.70694 6.51172 7.97665V11.8836C6.51172 12.1533 6.73038 12.372 7.00009 12.372Z"
                              fill="#99A1B7"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div className="card shadow-none flex items-center justify-between flex-row gap-1.5 p-2.5 rounded-lg bg-light-active">
                        <div className="flex items-center gap-1.5">
                          <img
                            className="h-6"
                            src="/media/file-types/svg.svg"
                          />
                          <div className="flex flex-col gap-0.5">
                            <a
                              className="hover:text-primary-active font-medium text-gray-700 text-xs"
                              href="#"
                            >
                              New-icon.svg
                            </a>
                            <span className="font-medium text-gray-500 text-2xs">
                              2.3 MB
                            </span>
                          </div>
                        </div>
                        <button className="btn btn-icon btn-xs btn-clear btn-light">
                          <svg
                            fill="none"
                            height={14}
                            viewBox="0 0 14 14"
                            width={14}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              d="M6.63821 2.60467C4.81926 2.60467 3.32474 3.99623 3.16201 5.77252C3.1386 6.02803 2.92413 6.22253 2.66871 6.22227C1.74915 6.22149 0.976744 6.9868 0.976744 7.90442C0.976744 8.83344 1.72988 9.58657 2.65891 9.58657H3.09302C3.36274 9.58657 3.5814 9.80523 3.5814 10.0749C3.5814 10.3447 3.36274 10.5633 3.09302 10.5633H2.65891C1.19044 10.5633 0 9.37292 0 7.90442C0 6.58614 0.986948 5.48438 2.24496 5.27965C2.62863 3.20165 4.44941 1.62793 6.63821 1.62793C8.26781 1.62793 9.69282 2.50042 10.4729 3.80193C12.3411 3.72829 14 5.2564 14 7.18091C14 8.93508 12.665 10.3769 10.9552 10.5466C10.6868 10.5733 10.4476 10.3773 10.421 10.1089C10.3943 9.84052 10.5903 9.60135 10.8587 9.57465C12.0739 9.45406 13.0233 8.42802 13.0233 7.18091C13.0233 5.74002 11.6905 4.59666 10.2728 4.79968C10.0642 4.82957 9.85672 4.72382 9.76028 4.53181C9.18608 3.38796 8.00318 2.60467 6.63821 2.60467Z"
                              fill="#99A1B7"
                              fillRule="evenodd"
                            ></path>
                            <path
                              clipRule="evenodd"
                              d="M6.99909 8.01611L8.28162 9.29864C8.47235 9.48937 8.78158 9.48937 8.97231 9.29864C9.16303 9.10792 9.16303 8.79874 8.97231 8.60802L7.57465 7.2103C7.25675 6.89247 6.74143 6.89247 6.42353 7.2103L5.02585 8.60802C4.83513 8.79874 4.83513 9.10792 5.02585 9.29864C5.21657 9.48937 5.5258 9.48937 5.71649 9.29864L6.99909 8.01611Z"
                              fill="#99A1B7"
                              fillRule="evenodd"
                            ></path>
                            <path
                              clipRule="evenodd"
                              d="M7.00009 12.372C7.2698 12.372 7.48846 12.1533 7.48846 11.8836V7.97665C7.48846 7.70694 7.2698 7.48828 7.00009 7.48828C6.73038 7.48828 6.51172 7.70694 6.51172 7.97665V11.8836C6.51172 12.1533 6.73038 12.372 7.00009 12.372Z"
                              fill="#99A1B7"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-b-gray-200"></div>
                  <div className="flex grow gap-2.5 px-5">
                    <div className="relative shrink-0 mt-0.5">
                      <img
                        alt=""
                        className="rounded-full size-8"
                        src="/media/avatars/300-21.png"
                      />
                      <span className="size-1.5 badge badge-circle badge-success absolute top-7 end-0.5 ring-1 ring-light transform -translate-y-1/2"></span>
                    </div>
                    <div className="flex flex-col gap-3.5">
                      <div className="flex flex-col gap-1">
                        <div className="text-2sm font-medium">
                          <a
                            className="hover:text-primary-active text-gray-900 font-semibold"
                            href="#"
                          >
                            Selene Silverleaf
                          </a>
                          <span className="text-gray-700">commented on</span>
                          <a
                            className="hover:text-primary-active text-primary"
                            href="#"
                          >
                            SiteSculpt
                          </a>
                          <span className="text-gray-700"></span>
                        </div>
                        <span className="flex items-center text-2xs font-medium text-gray-500">
                          4 days ago
                          <span className="badge badge-circle bg-gray-500 size-1 mx-1.5"></span>
                          Manager
                        </span>
                      </div>
                      <div className="card shadow-none flex flex-col gap-2.5 p-3.5 rounded-lg bg-light-active">
                        <div className="text-2sm font-semibold text-gray-600 mb-px">
                          <a
                            className="hover:text-primary-active text-gray-900 font-semibold"
                            href="#"
                          >
                            @Cody
                          </a>
                          <span className="text-gray-700 font-medium">
                            This design is simply stunning! From layout to
                            color, it's a work of art!
                          </span>
                        </div>
                        <label className="input input-sm">
                          <input
                            placeholder="Reply"
                            type="text"
                            defaultValue=""
                          />
                          <button className="btn btn-icon">
                            <i className="ki-filled ki-picture"></i>
                          </button>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-b-gray-200"></div>
                  <div
                    className="flex grow gap-2.5 px-5"
                    id="notification_request_3"
                  >
                    <div className="relative shrink-0 mt-0.5">
                      <img
                        alt=""
                        className="rounded-full size-8"
                        src="/media/avatars/300-13.png"
                      />
                      <span className="size-1.5 badge badge-circle badge-success absolute top-7 end-0.5 ring-1 ring-light transform -translate-y-1/2"></span>
                    </div>
                    <div className="flex flex-col gap-3.5">
                      <div className="flex flex-col gap-1">
                        <div className="text-2sm font-medium mb-px">
                          <a
                            className="hover:text-primary-active text-gray-900 font-semibold"
                            href="#"
                          >
                            Thalia Fox
                          </a>
                          <span className="text-gray-700">
                            has invited you to join
                          </span>
                          <a
                            className="hover:text-primary-active text-primary"
                            href="#"
                          >
                            Design Research
                          </a>
                          <span className="text-gray-700"></span>
                        </div>
                        <span className="flex items-center text-2xs font-medium text-gray-500">
                          4 days ago
                          <span className="badge badge-circle bg-gray-500 size-1 mx-1.5"></span>
                          Dev Team
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        <button
                          className="btn btn-light btn-sm"
                          data-dismiss="#notification_request_3"
                        >
                          Decline
                        </button>
                        <button
                          className="btn btn-dark btn-sm"
                          data-dismiss="#notification_request_3"
                        >
                          Accept
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b border-b-gray-200"></div>
              <div
                className="grid grid-cols-2 p-5 gap-2.5"
                id="notifications_team_footer"
              >
                <button className="btn btn-sm btn-light justify-center">
                  Archive all
                </button>
                <button className="btn btn-sm btn-light justify-center">
                  Mark all as read
                </button>
              </div>
            </div>
          </div>
          <div className="grow hidden" id="notifications_tab_following">
            <div className="flex flex-col">
              <div
                className="scrollable-y-auto"
                data-scrollable="true"
                data-scrollable-dependencies="#header"
                data-scrollable-max-height="auto"
                data-scrollable-offset="200px"
              >
                <div className="flex flex-col gap-5 pt-3 pb-4">
                  <div className="flex grow gap-2.5 px-5">
                    <div className="relative shrink-0 mt-0.5">
                      <img
                        alt=""
                        className="rounded-full size-8"
                        src="/media/avatars/300-1.png"
                      />
                      <span className="size-1.5 badge badge-circle bg-gray-400 absolute top-7 end-0.5 ring-1 ring-light transform -translate-y-1/2"></span>
                    </div>
                    <div className="flex flex-col gap-2.5 grow">
                      <div className="flex flex-col gap-1 mb-1">
                        <div className="text-2sm font-medium mb-px">
                          <a
                            className="hover:text-primary-active text-gray-900 font-semibold"
                            href="#"
                          >
                            Jane Perez
                          </a>
                          <span className="text-gray-700">
                            added 2 new works to
                          </span>
                          <a
                            className="hover:text-primary-active text-primary font-semibold"
                            href="#"
                          >
                            Inspirations 2024
                          </a>
                        </div>
                        <span className="flex items-center text-2xs font-medium text-gray-500">
                          23 hours ago
                          <span className="badge badge-circle bg-gray-500 size-1 mx-1.5"></span>
                          Craftwork Design
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="card shadow-none flex flex-col gap-3.5 bg-light-active w-40">
                          <div
                            className="bg-cover bg-no-repeat card-rounded-t shrink-0 h-24"
                            style={{
                              backgroundImage:
                                'url("/static/metronic-tailwind-html/dist//media/images/600x600/6.jpg")'
                            }}
                          ></div>
                          <div className="px-2.5 pb-2">
                            <a
                              className="font-medium block text-gray-700 hover:text-primary text-xs leading-4 mb-0.5"
                              href="#"
                            >
                              Geometric Patterns
                            </a>
                            <div className="text-2xs font-medium text-gray-500">
                              Token ID:
                              <span className="text-2xs font-medium text-gray-700">
                                81023
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="card shadow-none flex flex-col gap-3.5 bg-light-active w-40">
                          <div
                            className="bg-cover bg-no-repeat card-rounded-t shrink-0 h-24"
                            style={{
                              backgroundImage:
                                'url("/static/metronic-tailwind-html/dist//media/images/600x600/1.jpg")'
                            }}
                          ></div>
                          <div className="px-2.5 pb-2">
                            <a
                              className="font-medium block text-gray-700 hover:text-primary text-xs leading-4 mb-0.5"
                              href="#"
                            >
                              Artistic Expressions
                            </a>
                            <div className="text-2xs font-medium text-gray-500">
                              Token ID:
                              <span className="text-2xs font-medium text-gray-700">
                                67890
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-b-gray-200"></div>
                  <div
                    className="flex grow gap-2.5 px-5"
                    id="notification_request_3"
                  >
                    <div className="relative shrink-0 mt-0.5">
                      <img
                        alt=""
                        className="rounded-full size-8"
                        src="/media/avatars/300-19.png"
                      />
                      <span className="size-1.5 badge badge-circle badge-success absolute top-7 end-0.5 ring-1 ring-light transform -translate-y-1/2"></span>
                    </div>
                    <div
                      className="flex flex-col gap-2.5 grow"
                      id="notification_request_17"
                    >
                      <div className="flex flex-col gap-1 mb-1">
                        <div className="text-2sm font-medium mb-px">
                          <a
                            className="hover:text-primary-active text-gray-900 font-semibold"
                            href="#"
                          >
                            Natalie Wood
                          </a>
                          <span className="text-gray-700">
                            wants to edit marketing project
                          </span>
                        </div>
                        <span className="flex items-center text-2xs font-medium text-gray-500">
                          1 day ago
                          <span className="badge badge-circle bg-gray-500 size-1 mx-1.5"></span>
                          Designer
                        </span>
                      </div>
                      <div className="card shadow-none flex items-center flex-row gap-1.5 p-2.5 rounded-lg bg-light-active">
                        <div className="flex items-center justify-center w-[26px] h-[30px] shrink-0 bg-white rounded border border-gray-200">
                          <img
                            className="h-5"
                            src="/media/brand-logos/jira.svg"
                          />
                        </div>
                        <a
                          className="hover:text-primary-active font-medium text-gray-700 text-xs me-1"
                          href="#"
                        >
                          User-feedback.jira
                        </a>
                        <span className="font-medium text-gray-500 text-2xs">
                          Edited 1 hour ago
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        <button
                          className="btn btn-light btn-sm"
                          data-dismiss="#notification_request_17"
                        >
                          Decline
                        </button>
                        <button
                          className="btn btn-dark btn-sm"
                          data-dismiss="#notification_request_17"
                        >
                          Accept
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-b-gray-200"></div>
                  <div className="flex grow gap-2.5 px-5">
                    <div className="relative shrink-0 mt-0.5">
                      <img
                        alt=""
                        className="rounded-full size-8"
                        src="/media/avatars/300-17.png"
                      />
                      <span className="size-1.5 badge badge-circle badge-success absolute top-7 end-0.5 ring-1 ring-light transform -translate-y-1/2"></span>
                    </div>
                    <div className="flex flex-col gap-2.5 grow">
                      <div className="flex flex-col gap-1 mb-1">
                        <div className="text-2sm font-medium mb-px">
                          <a
                            className="hover:text-primary-active text-gray-900 font-semibold"
                            href="#"
                          >
                            Aaron Foster
                          </a>
                          <span className="text-gray-700">
                            requested to view
                          </span>
                        </div>
                        <span className="flex items-center text-2xs font-medium text-gray-500">
                          3 day ago
                          <span className="badge badge-circle bg-gray-500 size-1 mx-1.5"></span>
                          Larsen Ltd
                        </span>
                      </div>
                      <div className="card shadow-none flex items-center flex-row gap-1.5 px-2.5 py-1.5 rounded-lg bg-light-active">
                        <i className="ki-filled ki-user-tick text-success text-base"></i>
                        <span className="font-medium text-success text-2sm">
                          You allowed Aaron to view
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-b-gray-200"></div>
                  <div className="flex grow gap-2.5 px-5">
                    <div className="relative shrink-0 mt-0.5">
                      <img
                        alt=""
                        className="rounded-full size-8"
                        src="/media/avatars/300-34.png"
                      />
                      <span className="size-1.5 badge badge-circle badge-success absolute top-7 end-0.5 ring-1 ring-light transform -translate-y-1/2"></span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-2sm font-medium mb-px">
                        <a
                          className="hover:text-primary-active text-gray-900 font-semibold"
                          href="#"
                        >
                          Chloe Morgan
                        </a>
                        <span className="text-gray-700">
                          posted a new article
                        </span>
                        <a
                          className="hover:text-primary-active text-primary"
                          href="#"
                        >
                          User Experience
                        </a>
                      </div>
                      <span className="flex items-center text-2xs font-medium text-gray-500">
                        1 day ago
                        <span className="badge badge-circle bg-gray-500 size-1 mx-1.5"></span>
                        Nexus
                      </span>
                    </div>
                  </div>
                  <div className="border-b border-b-gray-200"></div>
                  <div className="flex grow gap-2.5 px-5">
                    <div className="relative shrink-0 mt-0.5">
                      <img
                        alt=""
                        className="rounded-full size-8"
                        src="/media/avatars/300-9.png"
                      />
                      <span className="size-1.5 badge badge-circle bg-gray-400 absolute top-7 end-0.5 ring-1 ring-light transform -translate-y-1/2"></span>
                    </div>
                    <div className="flex flex-col gap-2.5 grow">
                      <div className="flex flex-col gap-1 mb-1">
                        <div className="text-2sm font-medium mb-px">
                          <a
                            className="hover:text-primary-active text-gray-900 font-semibold"
                            href="#"
                          >
                            Gabriel Bennett
                          </a>
                          <span className="text-gray-700">
                            started connect you
                          </span>
                        </div>
                        <span className="flex items-center text-2xs font-medium text-gray-500">
                          3 day ago
                          <span className="badge badge-circle bg-gray-500 size-1 mx-1.5"></span>
                          Development
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        <button className="btn btn-sm btn-light">
                          <i className="ki-filled ki-check-circle"></i>
                          Connected
                        </button>
                        <button className="btn btn-dark btn-sm">
                          Go to profile
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-b-gray-200"></div>
                  <div
                    className="flex grow gap-2.5 px-5"
                    id="notification_request_3"
                  >
                    <div className="relative shrink-0 mt-0.5">
                      <img
                        alt=""
                        className="rounded-full size-8"
                        src="/media/avatars/300-13.png"
                      />
                      <span className="size-1.5 badge badge-circle badge-success absolute top-7 end-0.5 ring-1 ring-light transform -translate-y-1/2"></span>
                    </div>
                    <div className="flex flex-col gap-3.5">
                      <div className="flex flex-col gap-1">
                        <div className="text-2sm font-medium mb-px">
                          <a
                            className="hover:text-primary-active text-gray-900 font-semibold"
                            href="#"
                          >
                            Thalia Fox
                          </a>
                          <span className="text-gray-700">
                            has invited you to join
                          </span>
                          <a
                            className="hover:text-primary-active text-primary"
                            href="#"
                          >
                            Design Research
                          </a>
                          <span className="text-gray-700"></span>
                        </div>
                        <span className="flex items-center text-2xs font-medium text-gray-500">
                          4 days ago
                          <span className="badge badge-circle bg-gray-500 size-1 mx-1.5"></span>
                          Dev Team
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        <button
                          className="btn btn-light btn-sm"
                          data-dismiss="#notification_request_3"
                        >
                          Decline
                        </button>
                        <button
                          className="btn btn-dark btn-sm"
                          data-dismiss="#notification_request_3"
                        >
                          Accept
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b border-b-gray-200"></div>
              <div
                className="grid grid-cols-2 p-5 gap-2.5"
                id="notifications_following_footer"
              >
                <button className="btn btn-sm btn-light justify-center">
                  Archive all
                </button>
                <button className="btn btn-sm btn-light justify-center">
                  Mark all as read
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu" data-menu="true">
        <div
          className="menu-item"
          data-menu-item-offset="20px, 10px"
          data-menu-item-placement="bottom-end"
          data-menu-item-toggle="dropdown"
          data-menu-item-trigger="click|lg:click"
        >
          <div className="menu-toggle btn btn-icon rounded-full">
            <img
              alt=""
              className="size-9 rounded-full border-2 border-success shrink-0"
              src="/media/avatars/300-2.png"
            />
          </div>
          <div className="menu-dropdown menu-default light:border-gray-300 w-full max-w-[250px]">
            <div className="flex items-center justify-between px-5 py-1.5 gap-1.5">
              <div className="flex items-center gap-2">
                <img
                  alt=""
                  className="size-9 rounded-full border-2 border-success"
                  src="/media/avatars/300-2.png"
                />
                <div className="flex flex-col gap-1.5">
                  <span className="text-sm text-gray-800 font-semibold leading-none">
                    Cody Fisher
                  </span>
                  <a
                    className="text-xs text-gray-600 hover:text-primary font-medium leading-none"
                    href="html/demo1/account/home/get-started.html"
                  >
                    c.fisher@gmail.com
                  </a>
                </div>
              </div>
              <span className="badge badge-xs badge-primary badge-outline">
                Pro
              </span>
            </div>
            <div className="menu-separator"></div>
            <div className="flex flex-col">
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="html/demo1/public-profile/profiles/default.html"
                >
                  <span className="menu-icon">
                    <i className="ki-filled ki-badge"></i>
                  </span>
                  <span className="menu-title">Public Profile</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="html/demo1/account/home/user-profile.html"
                >
                  <span className="menu-icon">
                    <i className="ki-filled ki-profile-circle"></i>
                  </span>
                  <span className="menu-title">My Profile</span>
                </a>
              </div>
              <div
                className="menu-item"
                data-menu-item-offset="-50px, 0"
                data-menu-item-placement="left-start"
                data-menu-item-toggle="dropdown"
                data-menu-item-trigger="click|lg:hover"
              >
                <div className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-filled ki-setting-2"></i>
                  </span>
                  <span className="menu-title">My Account</span>
                  <span className="menu-arrow">
                    <i className="ki-filled ki-right text-3xs"></i>
                  </span>
                </div>
                <div className="menu-dropdown menu-default light:border-gray-300 w-full max-w-[220px]">
                  <div className="menu-item">
                    <a
                      className="menu-link"
                      href="html/demo1/account/home/get-started.html"
                    >
                      <span className="menu-icon">
                        <i className="ki-filled ki-coffee"></i>
                      </span>
                      <span className="menu-title">Get Started</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link"
                      href="html/demo1/account/home/user-profile.html"
                    >
                      <span className="menu-icon">
                        <i className="ki-filled ki-some-files"></i>
                      </span>
                      <span className="menu-title">My Profile</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link" href="#">
                      <span className="menu-icon">
                        <i className="ki-filled ki-icon"></i>
                      </span>
                      <span className="menu-title">Billing</span>
                      <span
                        className="menu-badge"
                        data-tooltip="true"
                        data-tooltip-placement="top"
                      >
                        <i className="ki-filled ki-information-2 text-md text-gray-500"></i>
                        <span className="tooltip" data-tooltip-content="true">
                          Payment and subscription info
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link"
                      href="html/demo1/account/security/overview.html"
                    >
                      <span className="menu-icon">
                        <i className="ki-filled ki-medal-star"></i>
                      </span>
                      <span className="menu-title">Security</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link"
                      href="html/demo1/account/members/teams.html"
                    >
                      <span className="menu-icon">
                        <i className="ki-filled ki-setting"></i>
                      </span>
                      <span className="menu-title">Members &amp; Roles</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a
                      className="menu-link"
                      href="html/demo1/account/integrations.html"
                    >
                      <span className="menu-icon">
                        <i className="ki-filled ki-switch"></i>
                      </span>
                      <span className="menu-title">Integrations</span>
                    </a>
                  </div>
                  <div className="menu-separator"></div>
                  <div className="menu-item">
                    <a
                      className="menu-link"
                      href="html/demo1/account/security/overview.html"
                    >
                      <span className="menu-icon">
                        <i className="ki-filled ki-shield-tick"></i>
                      </span>
                      <span className="menu-title">Notifications</span>
                      <label className="switch switch-sm">
                        <input
                          defaultChecked={false}
                          name="check"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </label>
                    </a>
                  </div>
                </div>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="https://devs.keenthemes.com">
                  <span className="menu-icon">
                    <i className="ki-filled ki-message-programming"></i>
                  </span>
                  <span className="menu-title">Dev Forum</span>
                </a>
              </div>
              <div
                className="menu-item"
                data-menu-item-offset="-10px, 0"
                data-menu-item-placement="left-start"
                data-menu-item-toggle="dropdown"
                data-menu-item-trigger="click|lg:hover"
              >
                <div className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-filled ki-icon"></i>
                  </span>
                  <span className="menu-title">Language</span>
                  <div className="flex items-center gap-1.5 rounded-md border border-gray-300 text-gray-600 p-1.5 text-2xs font-medium shrink-0">
                    English
                    <img
                      alt=""
                      className="inline-block size-3.5 rounded-full"
                      src="/media/flags/united-states.svg"
                    />
                  </div>
                </div>
                <div className="menu-dropdown menu-default light:border-gray-300 w-full max-w-[170px]">
                  <div className="menu-item active">
                    <a className="menu-link h-10" href="#">
                      <span className="menu-icon">
                        <img
                          alt=""
                          className="inline-block size-4 rounded-full"
                          src="/media/flags/united-states.svg"
                        />
                      </span>
                      <span className="menu-title">English</span>
                      <span className="menu-badge">
                        <i className="ki-solid ki-check-circle text-success text-base"></i>
                      </span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link h-10" href="#">
                      <span className="menu-icon">
                        <img
                          alt=""
                          className="inline-block size-4 rounded-full"
                          src="/media/flags/spain.svg"
                        />
                      </span>
                      <span className="menu-title">Spanish</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link h-10" href="#">
                      <span className="menu-icon">
                        <img
                          alt=""
                          className="inline-block size-4 rounded-full"
                          src="/media/flags/germany.svg"
                        />
                      </span>
                      <span className="menu-title">German</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link h-10" href="#">
                      <span className="menu-icon">
                        <img
                          alt=""
                          className="inline-block size-4 rounded-full"
                          src="/media/flags/japan.svg"
                        />
                      </span>
                      <span className="menu-title">Japanese</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link h-10" href="#">
                      <span className="menu-icon">
                        <img
                          alt=""
                          className="inline-block size-4 rounded-full"
                          src="/media/flags/france.svg"
                        />
                      </span>
                      <span className="menu-title">French</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-separator"></div>
            <div className="flex flex-col">
              <div className="menu-item mb-0.5">
                <div className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-filled ki-moon"></i>
                  </span>
                  <span className="menu-title">Dark Mode</span>
                  <label className="switch switch-sm">
                    <input
                      data-theme-state="dark"
                      data-theme-toggle="true"
                      name="check"
                      type="checkbox"
                      defaultValue={1}
                    />
                  </label>
                </div>
              </div>
              <div className="menu-item px-4 py-1.5">
                <a
                  className="btn btn-sm btn-light justify-center"
                  href="html/demo1/authentication/classic/sign-in.html"
                >
                  Log out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>;
}
  
export default Header