<div class="kt-container-fixed">
<div class="grid gap-5 lg:gap-7.5">
       <style>
        .upgrade-bg {
		background-image: url('assets/media/images/2600x1200/bg-5.png');
	}
	.dark .upgrade-bg {
		background-image: url('assets/media/images/2600x1200/bg-5-dark.png');
	}
       </style>
       <div class="kt-card rounded-xl">
        <div class="flex items-center flex-wrap sm:flex-wrap justify-between grow gap-2 p-5 rtl:[background-position:-30%_41%] [background-position:121%_41%] bg-no-repeat bg-[length:660px_310px] upgrade-bg">
         <div class="flex items-center gap-4">
          <div class="relative size-[50px] shrink-0">
           <svg class="w-full h-full stroke-primary/10 fill-primary-soft" fill="none" height="48" viewbox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
			18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
			39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
            </path>
            <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
			18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
			39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
            </path>
           </svg>
           <div class="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
            <i class="ki-filled ki-information-4 text-xl text-primary">
            </i>
           </div>
          </div>
          <div class="flex flex-col gap-1.5">
           <div class="flex items-center flex-wrap gap-2.5">
            <a class="text-base font-medium text-mono hover:text-primary" href="#">
             Upgrade your business info
            </a>
            <span class="kt-badge kt-badge-sm kt-badge-outline">
             16 days left
            </span>
           </div>
           <div class="text-sm text-foreground">
            Elevate business information for a standout profile. 
					Utilize premium features, ensuring success with enhanced details.
            <br/>
            Upgrade now for heightened visibility and broader impact.
           </div>
          </div>
         </div>
         <div class="flex items-center gap-1.5">
          <button class="kt-btn kt-btn-mono">
           Start
          </button>
          <a class="kt-btn kt-btn-ghost" href="#">
           Skip
          </a>
         </div>
        </div>
       </div>
       <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
        <div class="col-span-1">
         <div class="flex flex-col gap-5 lg:gap-7.5">
          <div class="kt-card min-w-full">
           <div class="kt-card-header">
            <h3 class="kt-card-title">
             Account
            </h3>
            <div class="flex items-center gap-2">
             <label class="kt-label">
              Public Profile
              <input checked="" class="kt-switch kt-switch-sm" name="check" type="checkbox" value="1"/>
             </label>
            </div>
           </div>
           <div class="kt-card-table kt-scrollable-x-auto pb-3">
            <table class="kt-table align-middle text-sm text-muted-foreground">
             <tr>
              <td class="w-28 text-secondary-foreground font-normal">
               Photo
              </td>
              <td class="text-secondary-foreground text-sm font-normal min-w-32">
               150x150px JPEG, PNG Image
              </td>
              <td class="text-center">
               <div class="flex justify-center items-center">
                <div class="kt-image-input size-16" data-kt-image-input="true">
                 <input accept=".png, .jpg, .jpeg" name="avatar" type="file">
                  <input name="avatar_remove" type="hidden"/>
                  <button class="kt-image-input-remove" data-kt-image-input-remove="true" data-kt-tooltip="true" data-kt-tooltip-placement="right" data-kt-tooltip-trigger="hover" type="button">
                   <i class="ki-filled ki-cross">
                   </i>
                   <span class="kt-tooltip" data-kt-tooltip-content="true">
                    Click to remove or revert
                   </span>
                  </button>
                  <div class="kt-image-input-placeholder border-2 border-green-500 kt-image-input-empty:border-input" data-kt-image-input-placeholder="true" style="background-image:url({{ asset('assets/media/avatars/blank.png') }})">
                   <div class="kt-image-input-preview" data-kt-image-input-preview="true" style="background-image:url({{ asset('assets/media/avatars/300-2.png') }})">
                   </div>
                   <div class="flex items-center justify-center cursor-pointer h-5 left-0 right-0 bottom-0 bg-black/25 absolute">
                    <svg class="fill-border opacity-80" height="12" viewbox="0 0 14 12" width="14" xmlns="http://www.w3.org/2000/svg">
                     <path d="M11.6665 2.64585H11.2232C11.0873 2.64749 10.9538 2.61053 10.8382 2.53928C10.7225 2.46803 10.6295 2.36541 10.5698 2.24335L10.0448 1.19918C9.91266 0.931853 9.70808 0.707007 9.45438 0.550249C9.20068 0.393491 8.90806 0.311121 8.60984 0.312517H5.38984C5.09162 0.311121 4.799 0.393491 4.5453 0.550249C4.2916 0.707007 4.08701 0.931853 3.95484 1.19918L3.42984 2.24335C3.37021 2.36541 3.27716 2.46803 3.1615 2.53928C3.04584 2.61053 2.91234 2.64749 2.7765 2.64585H2.33317C1.90772 2.64585 1.49969 2.81486 1.19885 3.1157C0.898014 3.41654 0.729004 3.82457 0.729004 4.25002V10.0834C0.729004 10.5088 0.898014 10.9168 1.19885 11.2177C1.49969 11.5185 1.90772 11.6875 2.33317 11.6875H11.6665C12.092 11.6875 12.5 11.5185 12.8008 11.2177C13.1017 10.9168 13.2707 10.5088 13.2707 10.0834V4.25002C13.2707 3.82457 13.1017 3.41654 12.8008 3.1157C12.5 2.81486 12.092 2.64585 11.6665 2.64585ZM6.99984 9.64585C6.39413 9.64585 5.80203 9.46624 5.2984 9.12973C4.79478 8.79321 4.40225 8.31492 4.17046 7.75532C3.93866 7.19572 3.87802 6.57995 3.99618 5.98589C4.11435 5.39182 4.40602 4.84613 4.83432 4.41784C5.26262 3.98954 5.80831 3.69786 6.40237 3.5797C6.99644 3.46153 7.61221 3.52218 8.1718 3.75397C8.7314 3.98576 9.2097 4.37829 9.54621 4.88192C9.88272 5.38554 10.0623 5.97765 10.0623 6.58335C10.0608 7.3951 9.73765 8.17317 9.16365 8.74716C8.58965 9.32116 7.81159 9.64431 7 9.64585Z">
                     </path>
                     <path d="M7 8.77087C8.20812 8.77087 9.1875 7.7915 9.1875 6.58337C9.1875 5.37525 8.20812 4.39587 7 4.39587C5.79188 4.39587 4.8125 5.37525 4.8125 6.58337C4.8125 7.7915 5.79188 8.77087 7 8.77087Z">
                     </path>
                    </svg>
                   </div>
                  </div>
                 </input>
                </div>
               </div>
              </td>
             </tr>
             <tr>
              <td class="text-secondary-foreground font-normal">
               Name
              </td>
              <td class="text-foreground font-normal">
               Jason Tatum
              </td>
              <td class="text-center">
               <a class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost kt-btn-primary" href="#">
                <i class="ki-filled ki-notepad-edit">
                </i>
               </a>
              </td>
             </tr>
             <tr>
              <td class="text-secondary-foreground font-normal">
               Availability
              </td>
              <td class="text-secondary-foreground">
               <span class="kt-badge kt-badge-sm kt-badge-outline kt-badge-success">
                Available now
               </span>
              </td>
              <td class="text-center">
               <a class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost kt-btn-primary" href="#">
                <i class="ki-filled ki-notepad-edit">
                </i>
               </a>
              </td>
             </tr>
             <tr>
              <td class="text-secondary-foreground font-normal min-w-36">
               Email
              </td>
              <td class="text-foreground font-normal min-w-60">
               <a class="text-secondary-foreground hover:text-primary" href="#">
                jasontt@studio.co
               </a>
              </td>
              <td class="max-w-16 text-center">
               <a class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost kt-btn-primary" href="#">
                <i class="ki-filled ki-notepad-edit">
                </i>
               </a>
              </td>
             </tr>
             <tr>
              <td class="text-secondary-foreground font-normal">
               Password
              </td>
              <td class="text-secondary-foreground text-sm font-normal">
               Password last changed 2 months ago
              </td>
              <td class="text-center">
               <a class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost kt-btn-primary" href="#">
                <i class="ki-filled ki-notepad-edit">
                </i>
               </a>
              </td>
             </tr>
             <tr>
              <td class="text-secondary-foreground font-normal">
               Sign-in with
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <a class="flex items-center justify-center size-8 bg-background rounded-full border border-input" href="#">
                 <img alt="" class="size-4" src="{{ asset('assets/media/brand-logos/google.svg') }}"/>
                </a>
                <a class="flex items-center justify-center size-8 bg-background rounded-full border border-input" href="#">
                 <img alt="" class="size-4" src="{{ asset('assets/media/brand-logos/facebook.svg') }}"/>
                </a>
                <a class="flex items-center justify-center size-8 bg-background rounded-full border border-input" href="#">
                 <img alt="product logo" class="dark:hidden h-4" src="{{ asset('assets/media/brand-logos/apple-black.svg') }}"/>
                 <img alt="product logo" class="light:hidden h-4" src="{{ asset('assets/media/brand-logos/apple-white.svg') }}"/>
                </a>
               </div>
              </td>
              <td class="text-center">
               <a class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost kt-btn-primary" href="#">
                <i class="ki-filled ki-notepad-edit">
                </i>
               </a>
              </td>
             </tr>
             <tr>
              <td class="text-secondary-foreground font-normal">
               Team Account
              </td>
              <td class="text-secondary-foreground text-sm font-normal">
               To be set
              </td>
              <td class="text-center">
               <a class="kt-link kt-link-underlined kt-link-dashed" href="#">
                Setup
               </a>
              </td>
             </tr>
             <tr>
              <td class="text-secondary-foreground font-normal">
               Social Profiles
              </td>
              <td>
               <div class="flex items-center gap-2.5">
                <a class="flex items-center justify-center size-8 bg-background rounded-full border border-input" href="#">
                 <img alt="" class="size-4" src="{{ asset('assets/media/brand-logos/linkedin.svg') }}"/>
                </a>
                <a class="flex items-center justify-center size-8 bg-background rounded-full border border-input" href="#">
                 <img alt="" class="size-4" src="{{ asset('assets/media/brand-logos/twitch-purple.svg') }}"/>
                </a>
                <a class="flex items-center justify-center size-8 bg-background rounded-full border border-input" href="#">
                 <img alt="" class="dark:hidden size-4" src="{{ asset('assets/media/brand-logos/x.svg') }}"/>
                 <img alt="" class="light:hidden size-4" src="{{ asset('assets/media/brand-logos/x-dark.svg') }}"/>
                </a>
                <a class="flex items-center justify-center size-8 bg-background rounded-full border border-input" href="#">
                 <img alt="" class="size-4" src="{{ asset('assets/media/brand-logos/dribbble.svg') }}"/>
                </a>
               </div>
              </td>
              <td class="text-center">
               <a class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost kt-btn-primary" href="#">
                <i class="ki-filled ki-notepad-edit">
                </i>
               </a>
              </td>
             </tr>
             <tr>
              <td class="text-secondary-foreground font-normal">
               Referral Link
              </td>
              <td class="text-secondary-foreground text-sm font-normal">
               <div class="flex items-center gap-1">
                <a class="text-foreground font-normal text-sm hover:text-primary" href="#">
                 https://studio.co/W3gvQOI35dt
                </a>
                <button class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                 <i class="ki-filled ki-copy">
                 </i>
                </button>
               </div>
              </td>
              <td class="text-center">
               <a class="kt-link kt-link-underlined kt-link-dashed" href="#">
                Re-create
               </a>
              </td>
             </tr>
            </table>
           </div>
          </div>
          <div class="kt-card">
           <div class="kt-card-header gap-2" id="settings_auth_two_factor">
            <h3 class="kt-card-title">
             Two-Factor authentication(2FA)
            </h3>
            <div class="kt-menu" data-kt-menu="true">
             <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-placement-rtl="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
              <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
               <i class="ki-filled ki-dots-vertical text-lg">
               </i>
              </button>
              <div class="kt-menu-dropdown kt-menu-default w-full max-w-[200px]" data-kt-menu-dismiss="true">
               <div class="kt-menu-item">
                <a class="kt-menu-link" href="html/demo1/account/home/settings-enterprise.html">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-setting-3">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  Settings
                 </span>
                </a>
               </div>
               <div class="kt-menu-item">
                <a class="kt-menu-link" href="html/demo1/account/members/import-members.html">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-some-files">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  Import
                 </span>
                </a>
               </div>
               <div class="kt-menu-item">
                <a class="kt-menu-link" href="html/demo1/account/activity.html">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-cloud-change">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  Activity
                 </span>
                </a>
               </div>
               <div class="kt-menu-item">
                <a class="kt-menu-link" data-kt-modal-toggle="#report_user_modal" href="#">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-dislike">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  Report
                 </span>
                </a>
               </div>
              </div>
             </div>
            </div>
           </div>
           <div class="kt-card-content lg:py-7.5">
            <div class="grid gap-5">
             <div class="flex items-center justify-between flex-wrap lg:flex-nowrap border border-border rounded-xl gap-2 px-3.5 py-2.5">
              <div class="flex items-center flex-wrap lg:flex-nowrap gap-3.5">
               <div class="relative size-[50px] shrink-0">
                <svg class="w-full h-full stroke-border fill-muted/30" fill="none" height="48" viewbox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                 <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
			18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
			39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                 </path>
                 <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
			18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
			39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                 </path>
                </svg>
                <div class="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                 <i class="ki-filled ki-message-text-2 text-xl text-muted-foreground">
                 </i>
                </div>
               </div>
               <div class="flex flex-col">
                <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                 Text Message (SMS)
                </a>
                <span class="text-sm text-secondary-foreground">
                 Instant codes for secure account verification.
                </span>
               </div>
              </div>
              <label class="kt-label">
               <input checked="" class="kt-switch" name="check" type="checkbox" value="1"/>
              </label>
             </div>
             <div class="flex items-center justify-between flex-wrap lg:flex-nowrap border border-border rounded-xl gap-2 px-3.5 py-2.5">
              <div class="flex items-center flex-wrap lg:flex-nowrap gap-3.5">
               <div class="relative size-[50px] shrink-0">
                <svg class="w-full h-full stroke-border fill-muted/30" fill="none" height="48" viewbox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                 <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
			18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
			39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                 </path>
                 <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
			18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
			39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                 </path>
                </svg>
                <div class="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                 <i class="ki-filled ki-shield-tick text-xl text-muted-foreground">
                 </i>
                </div>
               </div>
               <div class="flex flex-col">
                <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                 Authenticator App (TOTP)
                </a>
                <span class="text-sm text-secondary-foreground">
                 Elevate protection with an authenticator app for two-factor authentication.
                </span>
               </div>
              </div>
              <label class="kt-label">
               <input checked="" class="kt-switch" name="check" type="checkbox" value="1"/>
              </label>
             </div>
            </div>
           </div>
          </div>
          <div class="kt-card">
           <div class="kt-card-header">
            <h3 class="kt-card-title">
             Calendar Accounts
             <span class="text-secondary-foreground font-medium text-sm">
              1/5
             </span>
            </h3>
            <button class="kt-btn kt-btn-outline">
             <i class="ki-filled ki-calendar-remove">
             </i>
             Add New
            </button>
           </div>
           <div class="kt-card-content">
            <div class="grid gap-2.5">
             <div class="flex items-center justify-between flex-wrap border border-border rounded-xl gap-2 px-3.5 py-2.5">
              <div class="flex items-center flex-wrap gap-3.5">
               <img alt="" class="size-6 shrink-0" src="{{ asset('assets/media/brand-logos/google-calendar.svg') }}"/>
               <div class="flex flex-col">
                <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                 Google
                </a>
                <a class="text-sm text-secondary-foreground hover:text-primary" href="#">
                 jasontt@studio.co
                </a>
               </div>
              </div>
              <div class="kt-btn kt-btn-icon kt-btn-ghost">
               <i class="ki-filled ki-trash">
               </i>
              </div>
             </div>
             <div class="flex items-center justify-between flex-wrap border border-border rounded-xl gap-2 px-3.5 py-2.5">
              <div class="flex items-center flex-wrap gap-3.5">
               <img alt="" class="size-6 shrink-0" src="{{ asset('assets/media/brand-logos/monday.svg') }}"/>
               <div class="flex flex-col">
                <a class="text-sm font-medium text-mono hover:text-primary mb-px" href="#">
                 Monday
                </a>
                <a class="text-sm text-secondary-foreground hover:text-primary" href="#">
                 jasontatum@keenthemes.com
                </a>
               </div>
              </div>
              <div class="kt-btn kt-btn-icon kt-btn-ghost">
               <i class="ki-filled ki-trash">
               </i>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="kt-card">
           <div class="kt-card-header gap-2" id="auth_social_sign_in">
            <h3 class="kt-card-title">
             Data import from Google Analytics
            </h3>
            <div class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost" data-kt-tooltip="true">
             <i class="ki-filled ki-information-2">
             </i>
             <span class="kt-tooltip" data-kt-tooltip-content="true">
              Continue to Sign-up with Google
             </span>
            </div>
           </div>
           <div class="kt-card-content lg:py-7.5 py-5">
            <div class="text-sm text-foreground mb-4">
             Define aspirations, outline the path. Set a goal to transform dreams into measurable achievements.
            </div>
            <a class="kt-btn kt-btn-outline" href="#">
             <img alt="" class="size-4 shrink-0" src="{{ asset('assets/media/brand-logos/google.svg') }}"/>
             Continue with Google
            </a>
           </div>
          </div>
          <div class="kt-card min-w-full">
           <div class="kt-card-header">
            <h3 class="kt-card-title">
             Trusted Devices
            </h3>
            <div class="kt-menu" data-kt-menu="true">
             <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-placement-rtl="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
              <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
               <i class="ki-filled ki-dots-vertical text-lg">
               </i>
              </button>
              <div class="kt-menu-dropdown kt-menu-default w-full max-w-[200px]" data-kt-menu-dismiss="true">
               <div class="kt-menu-item">
                <a class="kt-menu-link" href="html/demo1/account/home/settings-enterprise.html">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-setting-3">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  Settings
                 </span>
                </a>
               </div>
               <div class="kt-menu-item">
                <a class="kt-menu-link" href="html/demo1/account/members/import-members.html">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-some-files">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  Import
                 </span>
                </a>
               </div>
               <div class="kt-menu-item">
                <a class="kt-menu-link" href="html/demo1/account/activity.html">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-cloud-change">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  Activity
                 </span>
                </a>
               </div>
               <div class="kt-menu-item">
                <a class="kt-menu-link" data-kt-modal-toggle="#report_user_modal" href="#">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-dislike">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  Report
                 </span>
                </a>
               </div>
              </div>
             </div>
            </div>
           </div>
           <div class="kt-card-table kt-scrollable-x-auto">
            <div class="kt-scrollable-auto">
             <table class="kt-table align-middle text-secondary-foreground font-medium text-sm">
              <tbody>
               <tr>
                <td class="min-w-48 w-48">
                 <div class="flex items-center gitem gap-2.5">
                  <img alt="image" class="h-6" src="{{ asset('assets/media/brand-logos/chrome.svg') }}">
                   <div class="flex flex-col">
                    <div class="text-sm font-medium text-mono hover:text-primary mb-px">
                     Chrome
                    </div>
                    <div class="flex gap-1.5">
                     <span class="text-xs text-secondary-foreground">
                      Seville, Spain
                     </span>
                     <img alt="image" class="h-3.5 rounded-full" src="{{ asset('assets/media/flags/spain.svg') }}">
                     </img>
                    </div>
                   </div>
                  </img>
                 </div>
                </td>
                <td class="min-w-56 text-secondary-foreground font-normal">
                 MacOS 12.19.6
                 <br/>
                 Active: Today at 9:03 AM
                </td>
                <td class="min-w-16 text-end">
                 <a class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost" href="#">
                  <i class="ki-filled ki-exit-right">
                  </i>
                 </a>
                </td>
               </tr>
               <tr>
                <td class="min-w-48 w-48">
                 <div class="flex items-center gitem gap-2.5">
                  <img alt="image" class="h-6" src="{{ asset('assets/media/brand-logos/chrome.svg') }}">
                   <div class="flex flex-col">
                    <div class="text-sm font-medium text-mono hover:text-primary mb-px">
                     Chrome
                    </div>
                    <div class="flex gap-1.5">
                     <span class="text-xs text-secondary-foreground">
                      Lyon, France
                     </span>
                     <img alt="image" class="h-3.5 rounded-full" src="{{ asset('assets/media/flags/france.svg') }}">
                     </img>
                    </div>
                   </div>
                  </img>
                 </div>
                </td>
                <td class="min-w-56 text-secondary-foreground font-normal">
                 Android 14.35
                 <br/>
                 Active: Mar 18 at 9:03 AM
                </td>
                <td class="min-w-16 text-end">
                 <a class="kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost" href="#">
                  <i class="ki-filled ki-exit-right">
                  </i>
                 </a>
                </td>
               </tr>
              </tbody>
             </table>
            </div>
           </div>
           <div class="kt-card-footer justify-center">
            <a class="kt-link kt-link-underlined kt-link-dashed" href="">
             Manage Trusted Devices
            </a>
           </div>
          </div>
         </div>
        </div>
        <div class="col-span-1">
         <div class="flex flex-col gap-5 lg:gap-7.5">
          <div class="kt-card">
           <div class="kt-card-header gap-2" id="settings_auth_two_factor">
            <h3 class="kt-card-title">
             Your Current Plan
            </h3>
            <div class="kt-menu" data-kt-menu="true">
             <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-placement-rtl="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
              <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
               <i class="ki-filled ki-dots-vertical text-lg">
               </i>
              </button>
              <div class="kt-menu-dropdown kt-menu-default w-full max-w-[200px]" data-kt-menu-dismiss="true">
               <div class="kt-menu-item">
                <a class="kt-menu-link" href="html/demo1/account/activity.html">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-cloud-change">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  Activity
                 </span>
                </a>
               </div>
               <div class="kt-menu-item">
                <a class="kt-menu-link" data-kt-modal-toggle="#share_profile_modal" href="#">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-share">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  Share
                 </span>
                </a>
               </div>
               <div class="kt-menu-item" data-kt-menu-item-offset="-15px, 0" data-kt-menu-item-placement="right-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click|lg:hover">
                <div class="kt-menu-link">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-notification-status">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  Notifications
                 </span>
                 <span class="kt-menu-arrow">
                  <i class="ki-filled ki-right text-xs rtl:transform rtl:rotate-180">
                  </i>
                 </span>
                </div>
                <div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]">
                 <div class="kt-menu-item">
                  <a class="kt-menu-link" href="html/demo1/account/home/settings-sidebar.html">
                   <span class="kt-menu-icon">
                    <i class="ki-filled ki-sms">
                    </i>
                   </span>
                   <span class="kt-menu-title">
                    Email
                   </span>
                  </a>
                 </div>
                 <div class="kt-menu-item">
                  <a class="kt-menu-link" href="html/demo1/account/home/settings-sidebar.html">
                   <span class="kt-menu-icon">
                    <i class="ki-filled ki-message-notify">
                    </i>
                   </span>
                   <span class="kt-menu-title">
                    SMS
                   </span>
                  </a>
                 </div>
                 <div class="kt-menu-item">
                  <a class="kt-menu-link" href="html/demo1/account/home/settings-sidebar.html">
                   <span class="kt-menu-icon">
                    <i class="ki-filled ki-notification-status">
                    </i>
                   </span>
                   <span class="kt-menu-title">
                    Push
                   </span>
                  </a>
                 </div>
                </div>
               </div>
               <div class="kt-menu-item">
                <a class="kt-menu-link" data-kt-modal-toggle="#report_user_modal" href="#">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-dislike">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  Report
                 </span>
                </a>
               </div>
               <div class="kt-menu-separator">
               </div>
               <div class="kt-menu-item">
                <a class="kt-menu-link" href="html/demo1/account/home/settings-enterprise.html">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-setting-3">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  Settings
                 </span>
                </a>
               </div>
              </div>
             </div>
            </div>
           </div>
           <div class="kt-card-content lg:py-7.5">
            <div class="flex flex-col sm:flex-row lg:flex-col xl:flex-row lg:gap-7.5 gap-5">
             <div class="md:flex-1 grid content-between border border-border rounded-xl">
              <div class="bg-cover bg-no-repeat rounded-t-lg h-48" style="background-image: url('assets/media/images/600x600/22.jpg')">
              </div>
              <div class="flex flex-col gap-2 p-5 pt-4">
               <a class="text-base text-mono font-medium hover:text-primary" href="#">
                Premium Plan
               </a>
               <p class="text-sm text-secondary-foreground mb-2">
                Access premium perks through our exclusive Premium Plan
               </p>
               <div>
                <button class="kt-btn kt-btn-outline">
                 Change Plan
                </button>
               </div>
              </div>
             </div>
             <div class="md:flex-1">
              <div class="flex flex-col lg:gap-7.5 gap-5">
               <div class="flex flex-col items-start gap-2.5">
                <a class="text-base text-mono font-medium hover:text-primary" href="#">
                 DevOps Integration
                </a>
                <p class="text-sm text-secondary-foreground">
                 Achieve faster releases, continuous integration & deployment
                </p>
                <a class="kt-link kt-link-underlined kt-link-dashed" href="#">
                 DevOps Features
                </a>
               </div>
               <div class="flex flex-col items-start gap-2.5">
                <a class="text-base text-mono font-medium hover:text-primary" href="#">
                 Data Encryption
                </a>
                <p class="text-sm text-secondary-foreground">
                 End-to-end encryption, protecting info from unauthorized access
                </p>
                <a class="kt-link kt-link-underlined kt-link-dashed" href="#">
                 Setup Encryption
                </a>
               </div>
               <div class="flex flex-col items-start gap-2.5">
                <a class="text-base text-mono font-medium hover:text-primary" href="#">
                 API Integration
                </a>
                <p class="text-sm text-secondary-foreground">
                 Integrate your systems with our robust API capabilities.
                </p>
                <a class="kt-link kt-link-underlined kt-link-dashed" href="#">
                 Get API Key
                </a>
               </div>
              </div>
             </div>
            </div>
           </div>
           <div class="kt-card-footer justify-center">
            <a class="kt-link kt-link-underlined kt-link-dashed" href="#">
             Go to Billing
            </a>
           </div>
          </div>
          <div class="kt-card">
           <div class="kt-card-header gap-2" id="settings_set_goal">
            <h3 class="kt-card-title">
             Set a Goal
            </h3>
            <div class="kt-menu" data-kt-menu="true">
             <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-placement-rtl="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
              <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
               <i class="ki-filled ki-dots-vertical text-lg">
               </i>
              </button>
              <div class="kt-menu-dropdown kt-menu-default w-full max-w-[200px]" data-kt-menu-dismiss="true">
               <div class="kt-menu-item">
                <a class="kt-menu-link" href="html/demo1/account/home/settings-enterprise.html">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-setting-3">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  Settings
                 </span>
                </a>
               </div>
               <div class="kt-menu-item">
                <a class="kt-menu-link" href="html/demo1/account/members/import-members.html">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-some-files">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  Import
                 </span>
                </a>
               </div>
               <div class="kt-menu-item">
                <a class="kt-menu-link" href="html/demo1/account/activity.html">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-cloud-change">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  Activity
                 </span>
                </a>
               </div>
               <div class="kt-menu-item">
                <a class="kt-menu-link" data-kt-modal-toggle="#report_user_modal" href="#">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-dislike">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  Report
                 </span>
                </a>
               </div>
              </div>
             </div>
            </div>
           </div>
           <div class="kt-card-content lg:p-7.5 p-5">
            <p class="text-sm text-foreground leading-5 mb-3.5">
             Define aspirations, outline the path. Set a goal to transform dreams into
             <br/>
             measurable achievements.
            </p>
            <div class="kt-card shadow-none p-3.5">
             <div class="flex justify-between items-center flex-wrap gap-2 mb-7">
              <div class="flex items-center gap-3.5 pt-1">
               <span class="text-2xl font-semibold text-foreground">
                $0
               </span>
               <span class="text-sm text-secondary-foreground">
                Pursuing opportunities, earning zero. Growth
                <br/>
                beyond monetary measures.
               </span>
              </div>
              <button class="kt-btn kt-btn-outline">
               Add a Goal
              </button>
             </div>
             <div class="mb-3">
              <input class="range card" id="range_1" max="10" min="0" type="range" value="1">
              </input>
             </div>
            </div>
           </div>
          </div>
          <div class="kt-card">
           <div class="kt-card-header gap-2">
            <h3 class="kt-card-title">
             Payment History
            </h3>
            <div class="kt-menu" data-kt-menu="true">
             <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-placement-rtl="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
              <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
               <i class="ki-filled ki-dots-vertical text-lg">
               </i>
              </button>
              <div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]" data-kt-menu-dismiss="true">
               <div class="kt-menu-item">
                <a class="kt-menu-link" href="#">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-document">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  View
                 </span>
                </a>
               </div>
               <div class="kt-menu-item" data-kt-menu-item-offset="-15px, 0" data-kt-menu-item-placement="right-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click|lg:hover">
                <div class="kt-menu-link">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-notification-status">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  Export
                 </span>
                 <span class="kt-menu-arrow">
                  <i class="ki-filled ki-right text-xs rtl:transform rtl:rotate-180">
                  </i>
                 </span>
                </div>
                <div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]">
                 <div class="kt-menu-item">
                  <a class="kt-menu-link" href="html/demo1/account/home/settings-sidebar.html">
                   <span class="kt-menu-icon">
                    <i class="ki-filled ki-sms">
                    </i>
                   </span>
                   <span class="kt-menu-title">
                    Email
                   </span>
                  </a>
                 </div>
                 <div class="kt-menu-item">
                  <a class="kt-menu-link" href="html/demo1/account/home/settings-sidebar.html">
                   <span class="kt-menu-icon">
                    <i class="ki-filled ki-message-notify">
                    </i>
                   </span>
                   <span class="kt-menu-title">
                    SMS
                   </span>
                  </a>
                 </div>
                 <div class="kt-menu-item">
                  <a class="kt-menu-link" href="html/demo1/account/home/settings-sidebar.html">
                   <span class="kt-menu-icon">
                    <i class="ki-filled ki-notification-status">
                    </i>
                   </span>
                   <span class="kt-menu-title">
                    Push
                   </span>
                  </a>
                 </div>
                </div>
               </div>
               <div class="kt-menu-item">
                <a class="kt-menu-link" href="#">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-pencil">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  Edit
                 </span>
                </a>
               </div>
               <div class="kt-menu-item">
                <a class="kt-menu-link" href="#">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-trash">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  Delete
                 </span>
                </a>
               </div>
              </div>
             </div>
            </div>
           </div>
           <div class="kt-card-table kt-scrollable-x-auto">
            <table class="kt-table">
             <thead>
              <tr>
               <th class="min-w-40">
                Date
               </th>
               <th class="min-w-40 lg:text-right">
                Type
               </th>
               <th class="min-w-40 lg:text-right">
                Amount
               </th>
               <th class="w-8">
               </th>
              </tr>
             </thead>
             <tbody>
              <tr>
               <td class="text-sm font-normal text-foreground">
                24 Aug, 2024
               </td>
               <td class="text-sm font-normal text-foreground lg:text-right">
                Subscription Fee
               </td>
               <td class="text-sm font-normal text-foreground lg:text-right">
                $24.00
               </td>
               <td>
                <div class="kt-menu" data-kt-menu="true">
                 <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-placement-rtl="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
                  <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                   <i class="ki-filled ki-dots-vertical text-lg">
                   </i>
                  </button>
                  <div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]" data-kt-menu-dismiss="true">
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-search-list">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      View
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-file-up">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Export
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-separator">
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-pencil">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Edit
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-copy">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Make a copy
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-separator">
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-trash">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Remove
                     </span>
                    </a>
                   </div>
                  </div>
                 </div>
                </div>
               </td>
              </tr>
              <tr>
               <td class="text-sm font-normal text-foreground">
                15 Sep, 2024
               </td>
               <td class="text-sm font-normal text-foreground lg:text-right">
                Product Purchase
               </td>
               <td class="text-sm font-normal text-foreground lg:text-right">
                $50.99
               </td>
               <td>
                <div class="kt-menu" data-kt-menu="true">
                 <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-placement-rtl="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
                  <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                   <i class="ki-filled ki-dots-vertical text-lg">
                   </i>
                  </button>
                  <div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]" data-kt-menu-dismiss="true">
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-search-list">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      View
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-file-up">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Export
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-separator">
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-pencil">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Edit
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-copy">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Make a copy
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-separator">
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-trash">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Remove
                     </span>
                    </a>
                   </div>
                  </div>
                 </div>
                </div>
               </td>
              </tr>
              <tr>
               <td class="text-sm font-normal text-foreground">
                05 Dec, 2024
               </td>
               <td class="text-sm font-normal text-foreground lg:text-right">
                Transaction Fee
               </td>
               <td class="text-sm font-normal text-foreground lg:text-right">
                $2.50
               </td>
               <td>
                <div class="kt-menu" data-kt-menu="true">
                 <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-placement-rtl="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
                  <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                   <i class="ki-filled ki-dots-vertical text-lg">
                   </i>
                  </button>
                  <div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]" data-kt-menu-dismiss="true">
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-search-list">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      View
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-file-up">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Export
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-separator">
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-pencil">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Edit
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-copy">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Make a copy
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-separator">
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-trash">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Remove
                     </span>
                    </a>
                   </div>
                  </div>
                 </div>
                </div>
               </td>
              </tr>
              <tr>
               <td class="text-sm font-normal text-foreground">
                30 May, 2025
               </td>
               <td class="text-sm font-normal text-foreground lg:text-right">
                Annual Maintenance
               </td>
               <td class="text-sm font-normal text-foreground lg:text-right">
                $40.20
               </td>
               <td>
                <div class="kt-menu" data-kt-menu="true">
                 <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-placement-rtl="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
                  <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                   <i class="ki-filled ki-dots-vertical text-lg">
                   </i>
                  </button>
                  <div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]" data-kt-menu-dismiss="true">
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-search-list">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      View
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-file-up">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Export
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-separator">
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-pencil">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Edit
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-copy">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Make a copy
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-separator">
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-trash">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Remove
                     </span>
                    </a>
                   </div>
                  </div>
                 </div>
                </div>
               </td>
              </tr>
             </tbody>
            </table>
           </div>
           <div class="kt-card-footer justify-center">
            <a class="kt-link kt-link-underlined kt-link-dashed" href="#">
             View all Payments
            </a>
           </div>
          </div>
          <div class="kt-card min-w-full">
           <div class="kt-card-header">
            <h3 class="kt-card-title">
             Connections
            </h3>
            <div class="kt-menu" data-kt-menu="true">
             <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-placement-rtl="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
              <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
               <i class="ki-filled ki-dots-vertical text-lg">
               </i>
              </button>
              <div class="kt-menu-dropdown kt-menu-default w-full max-w-[200px]" data-kt-menu-dismiss="true">
               <div class="kt-menu-item">
                <a class="kt-menu-link" href="html/demo1/account/home/settings-enterprise.html">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-setting-3">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  Settings
                 </span>
                </a>
               </div>
               <div class="kt-menu-item">
                <a class="kt-menu-link" href="html/demo1/account/members/import-members.html">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-some-files">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  Import
                 </span>
                </a>
               </div>
               <div class="kt-menu-item">
                <a class="kt-menu-link" href="html/demo1/account/activity.html">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-cloud-change">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  Activity
                 </span>
                </a>
               </div>
               <div class="kt-menu-item">
                <a class="kt-menu-link" data-kt-modal-toggle="#report_user_modal" href="#">
                 <span class="kt-menu-icon">
                  <i class="ki-filled ki-dislike">
                  </i>
                 </span>
                 <span class="kt-menu-title">
                  Report
                 </span>
                </a>
               </div>
              </div>
             </div>
            </div>
           </div>
           <div class="kt-card-table kt-scrollable-x-auto">
            <div class="kt-scrollable-auto">
             <table class="kt-table align-middle text-sm text-secondary-foreground">
              <tr class="bg-accent/50">
               <th class="text-start font-normal min-w-48 py-2.5">
                Name
               </th>
               <th class="text-right font-normal min-w-28 py-2.5">
                Joint Links
               </th>
               <th class="text-right font-normal min-w-20 py-2.5">
                Status
               </th>
               <th class="min-w-16">
               </th>
              </tr>
              <tr>
               <td class="py-3.5">
                <div class="flex items-center grow gap-2.5">
                 <img alt="" class="rounded-full size-9 shrink-0" src="{{ asset('assets/media/avatars/300-3.png') }}">
                  <div class="flex flex-col gap-0.5">
                   <a class="text-sm font-smedium text-mono hover:text-primary mb-px" href="#">
                    Tyler Hero
                   </a>
                   <span class="text-xs font-normal text-secondary-foreground">
                    26 connections
                   </span>
                  </div>
                 </img>
                </div>
               </td>
               <td class="py-2 text-right text-secondary-foreground font-nmedium">
                6
               </td>
               <td class="py-2 text-right">
                <button class="kt-btn kt-btn-sm kt-btn-icon kt-btn-primary rounded-full">
                 <i class="ki-filled ki-check">
                 </i>
                </button>
               </td>
               <td class="text-right">
                <div class="kt-menu inline-flex" data-kt-menu="true">
                 <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-placement-rtl="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
                  <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                   <i class="ki-filled ki-dots-vertical text-lg">
                   </i>
                  </button>
                  <div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]" data-kt-menu-dismiss="true">
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-document">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Details
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" data-kt-modal-toggle="#share_profile_modal" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-share">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Share
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-file-up">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Export
                     </span>
                    </a>
                   </div>
                  </div>
                 </div>
                </div>
               </td>
              </tr>
              <tr>
               <td class="py-3.5">
                <div class="flex items-center grow gap-2.5">
                 <img alt="" class="rounded-full size-9 shrink-0" src="{{ asset('assets/media/avatars/300-1.png') }}">
                  <div class="flex flex-col gap-0.5">
                   <a class="text-sm font-smedium text-mono hover:text-primary mb-px" href="#">
                    Esther Howard
                   </a>
                   <span class="text-xs font-normal text-secondary-foreground">
                    639 connections
                   </span>
                  </div>
                 </img>
                </div>
               </td>
               <td class="py-2 text-right text-secondary-foreground font-nmedium">
                none
               </td>
               <td class="py-2 text-right">
                <button class="kt-btn kt-btn-sm kt-btn-icon kt-btn-primary rounded-full">
                 <i class="ki-filled ki-check">
                 </i>
                </button>
               </td>
               <td class="text-right">
                <div class="kt-menu inline-flex" data-kt-menu="true">
                 <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-placement-rtl="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
                  <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                   <i class="ki-filled ki-dots-vertical text-lg">
                   </i>
                  </button>
                  <div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]" data-kt-menu-dismiss="true">
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-document">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Details
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" data-kt-modal-toggle="#share_profile_modal" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-share">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Share
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-file-up">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Export
                     </span>
                    </a>
                   </div>
                  </div>
                 </div>
                </div>
               </td>
              </tr>
              <tr>
               <td class="py-3.5">
                <div class="flex items-center grow gap-2.5">
                 <img alt="" class="rounded-full size-9 shrink-0" src="{{ asset('assets/media/avatars/300-11.png') }}">
                  <div class="flex flex-col gap-0.5">
                   <a class="text-sm font-smedium text-mono hover:text-primary mb-px" href="#">
                    Jacob Jones
                   </a>
                   <span class="text-xs font-normal text-secondary-foreground">
                    125 connections
                   </span>
                  </div>
                 </img>
                </div>
               </td>
               <td class="py-2 text-right text-secondary-foreground font-nmedium">
                19
               </td>
               <td class="py-2 text-right">
                <button class="kt-btn kt-btn-sm kt-btn-icon kt-btn-primary rounded-full">
                 <i class="ki-filled ki-check">
                 </i>
                </button>
               </td>
               <td class="text-right">
                <div class="kt-menu inline-flex" data-kt-menu="true">
                 <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-placement-rtl="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
                  <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                   <i class="ki-filled ki-dots-vertical text-lg">
                   </i>
                  </button>
                  <div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]" data-kt-menu-dismiss="true">
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-document">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Details
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" data-kt-modal-toggle="#share_profile_modal" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-share">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Share
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-file-up">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Export
                     </span>
                    </a>
                   </div>
                  </div>
                 </div>
                </div>
               </td>
              </tr>
              <tr>
               <td class="py-3.5">
                <div class="flex items-center grow gap-2.5">
                 <img alt="" class="rounded-full size-9 shrink-0" src="{{ asset('assets/media/avatars/300-2.png') }}">
                  <div class="flex flex-col gap-0.5">
                   <a class="text-sm font-smedium text-mono hover:text-primary mb-px" href="#">
                    Cody Fisher
                   </a>
                   <span class="text-xs font-normal text-secondary-foreground">
                    81 connections
                   </span>
                  </div>
                 </img>
                </div>
               </td>
               <td class="py-2 text-right text-secondary-foreground font-nmedium">
                none
               </td>
               <td class="py-2 text-right">
                <button class="kt-btn kt-btn-sm kt-btn-icon kt-btn-primary rounded-full">
                 <i class="ki-filled ki-check">
                 </i>
                </button>
               </td>
               <td class="text-right">
                <div class="kt-menu inline-flex" data-kt-menu="true">
                 <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-placement-rtl="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
                  <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                   <i class="ki-filled ki-dots-vertical text-lg">
                   </i>
                  </button>
                  <div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]" data-kt-menu-dismiss="true">
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-document">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Details
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" data-kt-modal-toggle="#share_profile_modal" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-share">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Share
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-file-up">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Export
                     </span>
                    </a>
                   </div>
                  </div>
                 </div>
                </div>
               </td>
              </tr>
              <tr>
               <td class="py-3.5">
                <div class="flex items-center grow gap-2.5">
                 <img alt="" class="rounded-full size-9 shrink-0" src="{{ asset('assets/media/avatars/300-5.png') }}">
                  <div class="flex flex-col gap-0.5">
                   <a class="text-sm font-smedium text-mono hover:text-primary mb-px" href="#">
                    Leslie Alexander
                   </a>
                   <span class="text-xs font-normal text-secondary-foreground">
                    1203 connections
                   </span>
                  </div>
                 </img>
                </div>
               </td>
               <td class="py-2 text-right text-secondary-foreground font-nmedium">
                2
               </td>
               <td class="py-2 text-right">
                <button class="kt-btn kt-btn-sm kt-btn-icon kt-btn-primary rounded-full">
                 <i class="ki-filled ki-check">
                 </i>
                </button>
               </td>
               <td class="text-right">
                <div class="kt-menu inline-flex" data-kt-menu="true">
                 <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-placement-rtl="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
                  <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                   <i class="ki-filled ki-dots-vertical text-lg">
                   </i>
                  </button>
                  <div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]" data-kt-menu-dismiss="true">
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-document">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Details
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" data-kt-modal-toggle="#share_profile_modal" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-share">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Share
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-file-up">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Export
                     </span>
                    </a>
                   </div>
                  </div>
                 </div>
                </div>
               </td>
              </tr>
              <tr>
               <td class="py-3.5">
                <div class="flex items-center grow gap-2.5">
                 <img alt="" class="rounded-full size-9 shrink-0" src="{{ asset('assets/media/avatars/300-9.png') }}">
                  <div class="flex flex-col gap-0.5">
                   <a class="text-sm font-smedium text-mono hover:text-primary mb-px" href="#">
                    Guy Hawkins
                   </a>
                   <span class="text-xs font-normal text-secondary-foreground">
                    2 connections
                   </span>
                  </div>
                 </img>
                </div>
               </td>
               <td class="py-2 text-right text-secondary-foreground font-nmedium">
                none
               </td>
               <td class="py-2 text-right">
                <button class="kt-btn kt-btn-sm kt-btn-icon kt-btn-primary rounded-full">
                 <i class="ki-filled ki-check">
                 </i>
                </button>
               </td>
               <td class="text-right">
                <div class="kt-menu inline-flex" data-kt-menu="true">
                 <div class="kt-menu-item" data-kt-menu-item-offset="0, 10px" data-kt-menu-item-placement="bottom-end" data-kt-menu-item-placement-rtl="bottom-start" data-kt-menu-item-toggle="dropdown" data-kt-menu-item-trigger="click">
                  <button class="kt-menu-toggle kt-btn kt-btn-sm kt-btn-icon kt-btn-ghost">
                   <i class="ki-filled ki-dots-vertical text-lg">
                   </i>
                  </button>
                  <div class="kt-menu-dropdown kt-menu-default w-full max-w-[175px]" data-kt-menu-dismiss="true">
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-document">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Details
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" data-kt-modal-toggle="#share_profile_modal" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-share">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Share
                     </span>
                    </a>
                   </div>
                   <div class="kt-menu-item">
                    <a class="kt-menu-link" href="#">
                     <span class="kt-menu-icon">
                      <i class="ki-filled ki-file-up">
                      </i>
                     </span>
                     <span class="kt-menu-title">
                      Export
                     </span>
                    </a>
                   </div>
                  </div>
                 </div>
                </div>
               </td>
              </tr>
             </table>
            </div>
           </div>
           <div class="kt-card-footer justify-center">
            <a class="kt-link kt-link-underlined kt-link-dashed" href="">
             View 64 more
            </a>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
</div>