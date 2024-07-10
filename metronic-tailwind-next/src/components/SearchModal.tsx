export default function SearchModal() {
    return <div className="modal" data-modal="true" id="search_modal">
        <div className="modal-content max-w-[600px] top-[15%]">
            <div className="modal-header py-4 px-5">
                <i className="ki-filled ki-magnifier text-gray-700 text-xl"></i>
                <input
                    className="input px-0 border-none bg-transparent shadow-none ml-2.5"
                    name="query"
                    placeholder="Tap to start search"
                    type="text"
                    defaultValue=""
                />
                <button
                    className="btn btn-sm btn-icon btn-light btn-clear shrink-0"
                    data-modal-dismiss="true"
                >
                    <i className="ki-filled ki-cross"></i>
                </button>
            </div>
            <div className="modal-body p-0 pb-5">
                <div className="tabs justify-between px-5 mb-2.5" data-tabs="true">
                    <div className="flex items-center gap-5">
                        <button
                            className="tab py-5 active"
                            data-tab-toggle="#search_modal_mixed"
                        >
                            Mixed
                        </button>
                        <button className="tab py-5" data-tab-toggle="#search_modal_settings">
                            Settings
                        </button>
                        <button
                            className="tab py-5"
                            data-tab-toggle="#search_modal_integrations"
                        >
                            Integrations
                        </button>
                        <button className="tab py-5" data-tab-toggle="#search_modal_users">
                            Users
                        </button>
                        <button className="tab py-5" data-tab-toggle="#search_modal_docs">
                            Docs
                        </button>
                        <button className="tab py-5" data-tab-toggle="#search_modal_empty">
                            Empty
                        </button>
                        <button
                            className="tab py-5"
                            data-tab-toggle="#search_modal_no-results"
                        >
                            No Results
                        </button>
                    </div>
                    <div className="menu -mt-px" data-menu="true">
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
                <div
                    className="scrollable-y-auto"
                    data-scrollable="true"
                    data-scrollable-max-height="auto"
                    data-scrollable-offset="300px"
                >
                    <div className="" id="search_modal_mixed">
                        <div className="flex flex-col gap-2.5">
                            <div>
                                <div className="text-xs text-gray-600 font-medium pt-2.5 pb-1.5 pl-5">
                                    Settings
                                </div>
                                <div className="menu menu-default p-0 flex-col">
                                    <div className="menu-item">
                                        <a className="menu-link" href="#">
                    <span className="menu-icon">
                      <i className="ki-filled ki-badge"></i>
                    </span>
                                            <span className="menu-title">Public Profile</span>
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a className="menu-link" href="#">
                    <span className="menu-icon">
                      <i className="ki-filled ki-setting-2"></i>
                    </span>
                                            <span className="menu-title">My Account</span>
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a className="menu-link" href="#">
                    <span className="menu-icon">
                      <i className="ki-filled ki-message-programming"></i>
                    </span>
                                            <span className="menu-title">Devs Forum</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-b-gray-200"></div>
                            <div>
                                <div className="text-xs text-gray-600 font-medium pt-2.5 pb-1.5 pl-5">
                                    Integrations
                                </div>
                                <div className="menu menu-default p-0 flex-col">
                                    <div className="menu-item">
                                        <div className="menu-link flex items-center jistify-between gap-2">
                                            <div className="flex items-center grow gap-2">
                                                <div
                                                    className="flex items-center justify-center size-10 shrink-0 rounded-full border border-gray-200 bg-gray-100">
                                                    <img
                                                        alt=""
                                                        className="size-6 shrink-0"
                                                        src="/media/brand-logos/jira.svg"
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-0.5">
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
                                            <div className="flex justify-end shrink-0">
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
                          <span
                              className="hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs size-6 text-success-inverse size-6 ring-success-light bg-success">
                            +3
                          </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-link flex items-center jistify-between gap-2">
                                            <div className="flex items-center grow gap-2">
                                                <div
                                                    className="flex items-center justify-center size-10 shrink-0 rounded-full border border-gray-200 bg-gray-100">
                                                    <img
                                                        alt=""
                                                        className="size-6 shrink-0"
                                                        src="/media/brand-logos/inferno.svg"
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-0.5">
                                                    <a
                                                        className="text-2sm font-semibold text-gray-900 hover:text-primary-active"
                                                        href="#"
                                                    >
                                                        Inferno
                                                    </a>
                                                    <span className="text-2xs font-medium text-gray-600">
                          Real-time photo sharing app
                        </span>
                                                </div>
                                            </div>
                                            <div className="flex justify-end shrink-0">
                                                <div className="flex -space-x-2">
                                                    <div className="flex">
                                                        <img
                                                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                                                            src="/media/avatars/300-14.png"
                                                        />
                                                    </div>
                                                    <div className="flex">
                                                        <img
                                                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                                                            src="/media/avatars/300-12.png"
                                                        />
                                                    </div>
                                                    <div className="flex">
                                                        <img
                                                            className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                                                            src="/media/avatars/300-9.png"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-b-gray-200"></div>
                            <div>
                                <div className="text-xs text-gray-600 font-medium pt-2.5 pb-1.5 pl-5">
                                    Users
                                </div>
                                <div className="menu menu-default p-0 flex-col">
                                    <div className="grid gap-1">
                                        <div className="menu-item">
                                            <div className="menu-link flex justify-between gap-2">
                                                <div className="flex items-center gap-2.5">
                                                    <img
                                                        alt=""
                                                        className="rounded-full size-9 shrink-0"
                                                        src="/media/avatars/300-3.png"
                                                    />
                                                    <div className="flex flex-col">
                                                        <a
                                                            className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                                                            href="#"
                                                        >
                                                            Tyler Hero
                                                        </a>
                                                        <span className="text-2sm font-normal text-gray-500">
                            tyler.hero@gmail.com connections
                          </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2.5">
                                                    <div
                                                        className="badge badge-pill badge-outline badge-success gap-1.5">
                                                        <span className="badge badge-dot badge-success size-1.5"></span>
                                                        In Office
                                                    </div>
                                                    <button className="btn btn-icon btn-light btn-clear btn-sm">
                                                        <i className="ki-filled ki-dots-vertical"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="menu-item">
                                            <div className="menu-link flex justify-between gap-2">
                                                <div className="flex items-center gap-2.5">
                                                    <img
                                                        alt=""
                                                        className="rounded-full size-9 shrink-0"
                                                        src="/media/avatars/300-1.png"
                                                    />
                                                    <div className="flex flex-col">
                                                        <a
                                                            className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                                                            href="#"
                                                        >
                                                            Esther Howard
                                                        </a>
                                                        <span className="text-2sm font-normal text-gray-500">
                            esther.howard@gmail.com connections
                          </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2.5">
                                                    <div
                                                        className="badge badge-pill badge-outline badge-danger gap-1.5">
                                                        <span className="badge badge-dot badge-danger size-1.5"></span>
                                                        On Leave
                                                    </div>
                                                    <button className="btn btn-icon btn-light btn-clear btn-sm">
                                                        <i className="ki-filled ki-dots-vertical"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden" id="search_modal_settings">
                        <div className="menu menu-default p-0 flex-col">
                            <div className="text-xs text-gray-600 font-medium pt-2.5 pl-5 pb-1.5">
                                Shortcuts
                            </div>
                            <div className="menu-item">
                                <a className="menu-link" href="#">
                <span className="menu-icon">
                  <i className="ki-filled ki-home-2"></i>
                </span>
                                    <span className="menu-title">Go to Dashboard</span>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a className="menu-link" href="#">
                <span className="menu-icon">
                  <i className="ki-filled ki-badge"></i>
                </span>
                                    <span className="menu-title">Public Profile</span>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a className="menu-link" href="#">
                <span className="menu-icon">
                  <i className="ki-filled ki-profile-circle"></i>
                </span>
                                    <span className="menu-title">My Profile</span>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a className="menu-link" href="#">
                <span className="menu-icon">
                  <i className="ki-filled ki-setting-2"></i>
                </span>
                                    <span className="menu-title">My Account</span>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a className="menu-link" href="#">
                <span className="menu-icon">
                  <i className="ki-filled ki-message-programming"></i>
                </span>
                                    <span className="menu-title">Devs Forum</span>
                                </a>
                            </div>
                            <div className="text-xs text-gray-600 font-medium pt-2.5 pl-5 pt-2.5 pb-1.5">
                                Actions
                            </div>
                            <div className="menu-item">
                                <a className="menu-link" href="#">
                <span className="menu-icon">
                  <i className="ki-filled ki-user"></i>
                </span>
                                    <span className="menu-title">Create User</span>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a className="menu-link" href="#">
                <span className="menu-icon">
                  <i className="ki-filled ki-user-edit"></i>
                </span>
                                    <span className="menu-title">Create Team</span>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a className="menu-link" href="#">
                <span className="menu-icon">
                  <i className="ki-filled ki-subtitle"></i>
                </span>
                                    <span className="menu-title">Change Plan</span>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a className="menu-link" href="#">
                <span className="menu-icon">
                  <i className="ki-filled ki-setting"></i>
                </span>
                                    <span className="menu-title">Setup Branding</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden" id="search_modal_integrations">
                        <div className="menu menu-default p-0 flex-col">
                            <div className="menu-item">
                                <div className="menu-link flex items-center jistify-between gap-2">
                                    <div className="flex items-center grow gap-2">
                                        <div
                                            className="flex items-center justify-center size-10 shrink-0 rounded-full border border-gray-200 bg-gray-100">
                                            <img
                                                alt=""
                                                className="size-6 shrink-0"
                                                src="/media/brand-logos/jira.svg"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-0.5">
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
                                    <div className="flex justify-end shrink-0">
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
                      <span
                          className="hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs size-6 text-success-inverse size-6 ring-success-light bg-success">
                        +3
                      </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item">
                                <div className="menu-link flex items-center jistify-between gap-2">
                                    <div className="flex items-center grow gap-2">
                                        <div
                                            className="flex items-center justify-center size-10 shrink-0 rounded-full border border-gray-200 bg-gray-100">
                                            <img
                                                alt=""
                                                className="size-6 shrink-0"
                                                src="/media/brand-logos/inferno.svg"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-0.5">
                                            <a
                                                className="text-2sm font-semibold text-gray-900 hover:text-primary-active"
                                                href="#"
                                            >
                                                Inferno
                                            </a>
                                            <span className="text-2xs font-medium text-gray-600">
                      Real-time photo sharing app
                    </span>
                                        </div>
                                    </div>
                                    <div className="flex justify-end shrink-0">
                                        <div className="flex -space-x-2">
                                            <div className="flex">
                                                <img
                                                    className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                                                    src="/media/avatars/300-14.png"
                                                />
                                            </div>
                                            <div className="flex">
                                                <img
                                                    className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                                                    src="/media/avatars/300-12.png"
                                                />
                                            </div>
                                            <div className="flex">
                                                <img
                                                    className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                                                    src="/media/avatars/300-9.png"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item">
                                <div className="menu-link flex items-center jistify-between gap-2">
                                    <div className="flex items-center grow gap-2">
                                        <div
                                            className="flex items-center justify-center size-10 shrink-0 rounded-full border border-gray-200 bg-gray-100">
                                            <img
                                                alt=""
                                                className="size-6 shrink-0"
                                                src="/media/brand-logos/evernote.svg"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-0.5">
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
                                    <div className="flex justify-end shrink-0">
                                        <div className="flex -space-x-2">
                                            <div className="flex">
                                                <img
                                                    className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                                                    src="/media/avatars/300-6.png"
                                                />
                                            </div>
                                            <div className="flex">
                                                <img
                                                    className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                                                    src="/media/avatars/300-3.png"
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
                                                    src="/media/avatars/300-8.png"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item">
                                <div className="menu-link flex items-center jistify-between gap-2">
                                    <div className="flex items-center grow gap-2">
                                        <div
                                            className="flex items-center justify-center size-10 shrink-0 rounded-full border border-gray-200 bg-gray-100">
                                            <img
                                                alt=""
                                                className="size-6 shrink-0"
                                                src="/media/brand-logos/gitlab.svg"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-0.5">
                                            <a
                                                className="text-2sm font-semibold text-gray-900 hover:text-primary-active"
                                                href="#"
                                            >
                                                Gitlab
                                            </a>
                                            <span className="text-2xs font-medium text-gray-600">
                      Notes management app
                    </span>
                                        </div>
                                    </div>
                                    <div className="flex justify-end shrink-0">
                                        <div className="flex -space-x-2">
                                            <div className="flex">
                                                <img
                                                    className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                                                    src="/media/avatars/300-18.png"
                                                />
                                            </div>
                                            <div className="flex">
                                                <img
                                                    className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                                                    src="/media/avatars/300-17.png"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item">
                                <div className="menu-link flex items-center jistify-between gap-2">
                                    <div className="flex items-center grow gap-2">
                                        <div
                                            className="flex items-center justify-center size-10 shrink-0 rounded-full border border-gray-200 bg-gray-100">
                                            <img
                                                alt=""
                                                className="size-6 shrink-0"
                                                src="/media/brand-logos/google-webdev.svg"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-0.5">
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
                                    <div className="flex justify-end shrink-0">
                                        <div className="flex -space-x-2">
                                            <div className="flex">
                                                <img
                                                    className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                                                    src="/media/avatars/300-14.png"
                                                />
                                            </div>
                                            <div className="flex">
                                                <img
                                                    className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                                                    src="/media/avatars/300-20.png"
                                                />
                                            </div>
                                            <div className="flex">
                                                <img
                                                    className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                                                    src="/media/avatars/300-21.png"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item px-4 pt-2">
                                <a className="btn btn-sm btn-light justify-center" href="#">
                                    Go to Apps
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden" id="search_modal_users">
                        <div className="menu menu-default p-0 flex-col">
                            <div className="grid gap-1">
                                <div className="menu-item">
                                    <div className="menu-link flex justify-between gap-2">
                                        <div className="flex items-center gap-2.5">
                                            <img
                                                alt=""
                                                className="rounded-full size-9 shrink-0"
                                                src="/media/avatars/300-3.png"
                                            />
                                            <div className="flex flex-col">
                                                <a
                                                    className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                                                    href="#"
                                                >
                                                    Tyler Hero
                                                </a>
                                                <span className="text-2sm font-normal text-gray-500">
                        tyler.hero@gmail.com connections
                      </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <div className="badge badge-pill badge-outline badge-success gap-1.5">
                                                <span className="badge badge-dot badge-success size-1.5"></span>
                                                In Office
                                            </div>
                                            <button className="btn btn-icon btn-light btn-clear btn-sm">
                                                <i className="ki-filled ki-dots-vertical"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <div className="menu-link flex justify-between gap-2">
                                        <div className="flex items-center gap-2.5">
                                            <img
                                                alt=""
                                                className="rounded-full size-9 shrink-0"
                                                src="/media/avatars/300-1.png"
                                            />
                                            <div className="flex flex-col">
                                                <a
                                                    className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                                                    href="#"
                                                >
                                                    Esther Howard
                                                </a>
                                                <span className="text-2sm font-normal text-gray-500">
                        esther.howard@gmail.com connections
                      </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <div className="badge badge-pill badge-outline badge-danger gap-1.5">
                                                <span className="badge badge-dot badge-danger size-1.5"></span>
                                                On Leave
                                            </div>
                                            <button className="btn btn-icon btn-light btn-clear btn-sm">
                                                <i className="ki-filled ki-dots-vertical"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <div className="menu-link flex justify-between gap-2">
                                        <div className="flex items-center gap-2.5">
                                            <img
                                                alt=""
                                                className="rounded-full size-9 shrink-0"
                                                src="/media/avatars/300-11.png"
                                            />
                                            <div className="flex flex-col">
                                                <a
                                                    className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                                                    href="#"
                                                >
                                                    Jacob Jones
                                                </a>
                                                <span className="text-2sm font-normal text-gray-500">
                        jacob.jones@gmail.com connections
                      </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <div className="badge badge-pill badge-outline badge-primary gap-1.5">
                                                <span className="badge badge-dot badge-primary size-1.5"></span>
                                                Remote
                                            </div>
                                            <button className="btn btn-icon btn-light btn-clear btn-sm">
                                                <i className="ki-filled ki-dots-vertical"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <div className="menu-link flex justify-between gap-2">
                                        <div className="flex items-center gap-2.5">
                                            <img
                                                alt=""
                                                className="rounded-full size-9 shrink-0"
                                                src="/media/avatars/300-5.png"
                                            />
                                            <div className="flex flex-col">
                                                <a
                                                    className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                                                    href="#"
                                                >
                                                    TLeslie Alexander
                                                </a>
                                                <span className="text-2sm font-normal text-gray-500">
                        leslie.alexander@gmail.com connections
                      </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <div className="badge badge-pill badge-outline badge-success gap-1.5">
                                                <span className="badge badge-dot badge-success size-1.5"></span>
                                                In Office
                                            </div>
                                            <button className="btn btn-icon btn-light btn-clear btn-sm">
                                                <i className="ki-filled ki-dots-vertical"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <div className="menu-link flex justify-between gap-2">
                                        <div className="flex items-center gap-2.5">
                                            <img
                                                alt=""
                                                className="rounded-full size-9 shrink-0"
                                                src="/media/avatars/300-2.png"
                                            />
                                            <div className="flex flex-col">
                                                <a
                                                    className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                                                    href="#"
                                                >
                                                    Cody Fisher
                                                </a>
                                                <span className="text-2sm font-normal text-gray-500">
                        cody.fisher@gmail.com connections
                      </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <div className="badge badge-pill badge-outline badge-primary gap-1.5">
                                                <span className="badge badge-dot badge-primary size-1.5"></span>
                                                Remote
                                            </div>
                                            <button className="btn btn-icon btn-light btn-clear btn-sm">
                                                <i className="ki-filled ki-dots-vertical"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu-item px-4 pt-2">
                                    <a className="btn btn-sm btn-light justify-center" href="#">
                                        Go to Users
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden" id="search_modal_docs">
                        <div className="menu menu-default p-0 flex-col">
                            <div className="grid">
                                <div className="menu-item">
                                    <div className="menu-link flex items-center">
                                        <div className="flex items-center grow gap-2.5">
                                            <img src="/media/file-types/pdf.svg"/>
                                            <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary mb-px">
                        Project-pitch.pdf
                      </span>
                                                <span className="text-xs font-medium text-gray-500">
                        4.7 MB 26 Sep 2024 3:20 PM
                      </span>
                                            </div>
                                        </div>
                                        <button className="btn btn-icon btn-light btn-clear btn-sm">
                                            <i className="ki-filled ki-dots-vertical"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <div className="menu-link flex items-center">
                                        <div className="flex items-center grow gap-2.5">
                                            <img src="/media/file-types/doc.svg"/>
                                            <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary mb-px">
                        Report-v1.docx
                      </span>
                                                <span className="text-xs font-medium text-gray-500">
                        2.3 MB 1 Oct 2024 12:00 PM
                      </span>
                                            </div>
                                        </div>
                                        <button className="btn btn-icon btn-light btn-clear btn-sm">
                                            <i className="ki-filled ki-dots-vertical"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <div className="menu-link flex items-center">
                                        <div className="flex items-center grow gap-2.5">
                                            <img src="/media/file-types/javascript.svg"/>
                                            <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary mb-px">
                        Framework-App.js
                      </span>
                                                <span className="text-xs font-medium text-gray-500">
                        0.8 MB 17 Oct 2024 6:46 PM
                      </span>
                                            </div>
                                        </div>
                                        <button className="btn btn-icon btn-light btn-clear btn-sm">
                                            <i className="ki-filled ki-dots-vertical"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <div className="menu-link flex items-center">
                                        <div className="flex items-center grow gap-2.5">
                                            <img src="/media/file-types/ai.svg"/>
                                            <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary mb-px">
                        Framework-App.js
                      </span>
                                                <span className="text-xs font-medium text-gray-500">
                        0.8 MB 17 Oct 2024 6:46 PM
                      </span>
                                            </div>
                                        </div>
                                        <button className="btn btn-icon btn-light btn-clear btn-sm">
                                            <i className="ki-filled ki-dots-vertical"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <div className="menu-link flex items-center">
                                        <div className="flex items-center grow gap-2.5">
                                            <img src="/media/file-types/php.svg"/>
                                            <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary mb-px">
                        appController.js
                      </span>
                                                <span className="text-xs font-medium text-gray-500">
                        0.1 MB 21 Nov 2024 3:20 PM
                      </span>
                                            </div>
                                        </div>
                                        <button className="btn btn-icon btn-light btn-clear btn-sm">
                                            <i className="ki-filled ki-dots-vertical"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="menu-item px-4 pt-2.5">
                                    <a className="btn btn-sm btn-light justify-center" href="#">
                                        Go to Users
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden" id="search_modal_empty">
                        <div className="flex flex-col text-center py-9 gap-5">
                            <div className="flex justify-center">
                                <img
                                    alt="image"
                                    className="dark:hidden max-h-[113px]"
                                    src="/media/illustrations/33.svg"
                                />
                                <img
                                    alt="image"
                                    className="light:hidden max-h-[113px]"
                                    src="/media/illustrations/33-dark.svg"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <h3 className="text-base font-semibold text-gray-900 text-center">
                                    Looking for something..
                                </h3>
                                <span className="text-2sm font-medium text-center text-gray-600">
                Initiate your digital experience with
                <br/>
                our intuitive dashboard
              </span>
                            </div>
                            <div className="flex justify-center">
                                <a className="btn btn-sm btn-light flex justify-center" href="#">
                                    View Projects
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden" id="search_modal_no-results">
                        <div className="flex flex-col text-center py-9 gap-5">
                            <div className="flex justify-center">
                                <img
                                    alt="image"
                                    className="dark:hidden max-h-[113px]"
                                    src="/media/illustrations/33.svg"
                                />
                                <img
                                    alt="image"
                                    className="light:hidden max-h-[113px]"
                                    src="/media/illustrations/33-dark.svg"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <h3 className="text-base font-semibold text-gray-900 text-center">
                                    No Results Found
                                </h3>
                                <span className="text-2sm font-medium text-center text-gray-600">
                Refine your query to discover relevant items
              </span>
                            </div>
                            <div className="flex justify-center">
                                <a className="btn btn-sm btn-light flex justify-center" href="#">
                                    View Projects
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}