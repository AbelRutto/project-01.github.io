;/*FB_PKG_DELIM*/

__d("IGDSGlimmer.react",["CometGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={root:{backgroundColor:"x19g9edo",borderTopStartRadius:"x1lcm9me",borderTopEndRadius:"x1yr5g0i",borderBottomEndRadius:"xrt01vj",borderBottomStartRadius:"x10y3i5r",$$css:!0}};function a(a){var b=a.children,d=a.index;a=a.xstyle;return h.jsx(c("CometGlimmer.react"),{children:b,index:d,xstyle:[i.root,a]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisNotificationsNavItem.react",["PolarisActivityStoryActions","PolarisActivityStorySelectors","PolarisIGCoreConstants","PolarisIGCoreHeartFilledIcon","PolarisIGCoreHeartPanoOutlineIcon","PolarisNavigationActionConstants","PolarisNavigationHelpers","PolarisNavigationItem.react","PolarisNavigationStrings","PolarisNavigationTooltipWrapper.react","PolarisNotificationsBannerV2.react","PolarisODS","PolarisReactRedux","PolarisRoutes","PolarisnavigationSelectors","PolarisuserSelectors","react","useMatchMedia"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useEffect;function a(a){var b=a.hasOpenSubpanel;b=b===void 0?!1:b;var e=a.hasPadding;e=e===void 0?!0:e;var f=a.modalOpen,g=a.onClick,k=a.productAttribution;a=a.size;var l=d("PolarisReactRedux").useDispatch(),m=d("PolarisReactRedux").useSelector(d("PolarisnavigationSelectors").getIsDesktopNavMenuOpen),n=d("PolarisReactRedux").useSelector(d("PolarisnavigationSelectors").getIsDirectDropdownOpen),o=d("PolarisReactRedux").useSelector(d("PolarisnavigationSelectors").getIsFeedCreationOpen),p=d("PolarisReactRedux").useSelector(d("PolarisnavigationSelectors").getIsLiveCreationModalOpen),q=d("PolarisReactRedux").useStore(),r=d("PolarisReactRedux").useSelector(d("PolarisuserSelectors").getViewer),s=d("PolarisReactRedux").useSelector(d("PolarisActivityStorySelectors").showBanner),t=d("PolarisReactRedux").useSelector(d("PolarisActivityStorySelectors").unreadCounts);j(function(){function a(a){l(d("PolarisActivityStoryActions").loadActivityCounts(a))}var b=q.getState(),c=r==null?void 0:r.id;!b.activityStories.countsRequested&&c!=null&&a(c)},[l,q,r]);t=t&&Object.keys(t).length>0?Number(Object.values(t).reduce(function(a,b){return Number(a)+Number(b)})):0;var u=d("PolarisReactRedux").useSelector(d("PolarisnavigationSelectors").getCurrentNavSelection)===d("PolarisNavigationActionConstants").NAVIGATION_SECTION_ACTIVITY;f=(f||u)&&!m&&!n&&!o&&!p;u=f?c("PolarisIGCoreHeartFilledIcon"):c("PolarisIGCoreHeartPanoOutlineIcon");m=h.jsx(u,{alt:d("PolarisNavigationStrings").NOTIFICATIONS_TEXT,size:a});n=i(function(a){c("PolarisODS").incr("web.navigation.click.desktop.activity"),a.preventDefault(),s&&l(d("PolarisActivityStoryActions").activityFeedChecked()),g()},[l,s,g]);o=c("useMatchMedia")("(max-width: "+d("PolarisNavigationHelpers").BOTTOM_STYLING_MAX_WIDTH+"px)");p=!o;u=i(function(){l(d("PolarisActivityStoryActions").activityBannerDismissed())},[l]);a=h.jsx(c("PolarisNavigationTooltipWrapper.react"),{arrowPosition:o?"top":"left",arrowVerticalPosition:"center",children:h.jsx(c("PolarisNotificationsBannerV2.react"),{arrowHorizontalOffset:o?"24px":void 0,arrowHorizontalPosition:o?"left":void 0,arrowPosition:o?"top":"left",autoHideAfter:c("PolarisIGCoreConstants").TOOLTIP.AUTO_HIDE_MS,onClick:n,onTooltipHide:u})});return h.jsx(c("PolarisNavigationItem.react"),{badgeVariant:t>0?"notifications":void 0,hasOpenSubpanel:b,hasPadding:e,href:o?d("PolarisRoutes").ACTIVITY_FEED_PATH:void 0,icon:m,isActive:f,label:d("PolarisNavigationStrings").NOTIFICATIONS_TEXT,onClick:n,productAttribution:k,section:p?void 0:d("PolarisNavigationActionConstants").NAVIGATION_SECTION_ACTIVITY,tooltip:s?a:void 0})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);