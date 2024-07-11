/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addBase, theme}) => {
  // Variables
  addBase({
    '.demo1': {
			'--tw-sidebar-transition-duration': '0.3s',
			'--tw-sidebar-transition-timing': 'ease',
			'--tw-sidebar-width': theme('custom.layouts.demo1.sidebar.width.desktop'),
			'--tw-sidebar-defualt-width': theme('custom.layouts.demo1.sidebar.width.desktop'),
			'--tw-header-height': theme('custom.layouts.demo1.header.height.desktop'),

			[`@media (max-width: ${theme('screens.lg')})`]: {
				'--tw-sidebar-width': theme('custom.layouts.demo1.sidebar.width.mobile'),
				'--tw-header-height': theme('custom.layouts.demo1.header.height.mobile')
			}
		}
  });   

	// Base
	addBase({
		'.demo1': {
			'.header': {
				'height': 'var(--tw-header-height)'
			},
			'.sidebar': {
				'width': 'var(--tw-sidebar-width)'
			},
			'&.header-fixed': {
				'.wrapper': {
					'padding-top': 'var(--tw-header-height)'
				}
			} 			
		}
	});

	// Desktop mode
	addBase({
		[`@media (min-width: ${theme('screens.lg')})`]: {
			'.demo1': {
				'.sidebar': {
					'width': 'var(--tw-sidebar-width)', 
					'transition': 'width var(--tw-sidebar-transition-duration) var(--tw-sidebar-transition-timing)',
					'.sidebar-header': {
						'height': 'var(--tw-header-height)'
					},
					'.sidebar-wrapper': {
						'width': 'var(--tw-sidebar-defualt-width)'
					},
					'.sidebar-logo': {
						'width': 'var(--tw-sidebar-defualt-width)'
					},
					'.small-logo': {
						'display': 'none'
					}
				},
				'&.sidebar-fixed': {
					'.wrapper': {
						'padding-left': 'var(--tw-sidebar-width)',
						'transition': 'padding-left var(--tw-sidebar-transition-duration) var(--tw-sidebar-transition-timing)'
					},
					'&.header-fixed': {
						'.header': {
							'left': 'var(--tw-sidebar-width)',
							'transition': 'left var(--tw-sidebar-transition-duration) var(--tw-sidebar-transition-timing)'
						},
						'.wrapper': {
							'padding-top': 'var(--tw-header-height)'
						}
					}
				},
				'&.sidebar-collapse': {
					'--tw-sidebar-width': theme('custom.layouts.demo1.sidebar.width.desktopCollapse'),
					'.sidebar': {
						'transition': 'width var(--tw-sidebar-transition-duration) var(--tw-sidebar-transition-timing)',
						'&.animating': {
							'pointer-events': 'none'
						},
						'&:hover': {
							'&:not(.animating)': {
								'width': 'var(--tw-sidebar-defualt-width)',
								'transition': 'width var(--tw-sidebar-transition-duration) var(--tw-sidebar-transition-timing)'
							}
						},
						'&:not(:hover)': {
							'.default-logo': {
								'display': 'none'
							},
							'.small-logo': {
								'display': 'flex'
							},
							'.menu': {
								'> .menu-item': {
									'> .menu-link, .menu-label': {
										'.menu-title, .menu-arrow, .menu-badge': {
											'display': 'none'
										}
									},
									'> .menu-accordion': {
										'display': 'none'
									},
									'> .menu-heading': {
										'visibility': 'hidden',
										'position': 'relative',
										'&:before': {
											'content': '"..."',
											'color': 'currentColor',
											'font-size': 'inherit',
											'position': 'absolute',
											'visibility': 'visible',
											'display': 'inline-block',
											'bottom': '50%',
											'left': '0',
											'margin-left': '1px',
											'transform': 'translateX(100%)'	
										}
									}
								}
							}
						},
						'.sidebar-content': {
							'overflow': 'hidden'
						}
					}					
				}
			}
		}
	});
});