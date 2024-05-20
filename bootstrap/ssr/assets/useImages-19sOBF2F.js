import { jsxs, jsx } from "react/jsx-runtime";
function TextField({
  label,
  placeholder,
  type,
  register,
  error,
  ...rest
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      "label",
      {
        className: `text-[#475467] text-sm font-semibold ${label ? "block" : "hidden"} ${label ? "mb-2" : ""}`,
        htmlFor: label,
        children: label
      }
    ),
    /* @__PURE__ */ jsx(
      "input",
      {
        ...register,
        ...rest,
        id: label,
        className: "w-full px-3 py-2 border border-borderprimary rounded-lg outline-none focus:ring-0 focus:outline-none focus:border-primary text-[#344054] text-base",
        type,
        placeholder
      }
    ),
    error && /* @__PURE__ */ jsx("span", { className: "text-red-500 text-sm", children: error.message || "This field is required" })
  ] });
}
const Logo = "/build/assets/mercury-8fXi7whz.svg";
const CanadaFlag = "/build/assets/canadaflag-8kvQDi-B.svg";
const SearchIcon = "/build/assets/search-DTI52lus.svg";
const Dot = "/build/assets/dot-CasaCHI2.svg";
const ArrowRight = "/build/assets/arrow-right-CwniCLT8.svg";
const ArrowRightLg = "/build/assets/arrow-right-lg-DmzzB_JP.svg";
const ArrowLeft = "/build/assets/arrow-left-DemXm5iX.svg";
const PlayCircle = "/build/assets/play-circle-CIdloQWT.svg";
const ArrowRightBlue = "/build/assets/arrow-right-blue-5tugYJv3.svg";
const ArrowRightDark = "/build/assets/arrowrightdark-ClFmpDoK.svg";
const ChevronRight = "/build/assets/chevron-right-BptE2XVt.svg";
const StarBlue = "/build/assets/starblue-1fGdJ-UU.svg";
const Avatar = "/build/assets/avatar-Ml4kLb0O.png";
const AvatarTwo = "/build/assets/avatartwo-BYcAmjdf.svg";
const MenuBurger = "/build/assets/menu-BtGFy5RA.png";
const Close = "/build/assets/close-DE_y1IAr.png";
const ChevronRightBlack = "/build/assets/right-chevron-D27tg5tY.png";
const Mail = "/build/assets/mail-CFI7jLPo.svg";
const GoogleBrandIcon = "/build/assets/googlebrand-CeuJW3mE.svg";
const MoreIcon = "/build/assets/more-lsPicAzX.svg";
const UserIcon = "/build/assets/user-CmBHit07.svg";
const CloseModel = "/build/assets/CloseModel-C1tZa3aT.svg";
const CopyIcon = "/build/assets/copy-B2dIM3Qa.svg";
const ArrowRightWhite = "/build/assets/arrowrightwhite-sUkc85Xf.svg";
const UploadIcon = "/build/assets/upload-Dms4nE-5.svg";
const Eye = "/build/assets/eye-B39t_2BY.svg";
const DownloadPrimary = "/build/assets/downloadprimary-Cp-qML6N.svg";
const EditGray = "/build/assets/editgray-CUd_d57R.svg";
const DeletePrimary = "/build/assets/deleteprimary-DJTfvKl0.svg";
const PlusPrimary = "/build/assets/plus-orR0K6TO.svg";
const LinkPrimary = "/build/assets/linkprimary-CxNMM_-O.svg";
const ServiceOne = "/build/assets/servicesone-C-Wm2pP2.png";
const ServiceTwo = "/build/assets/servicestwo-Brg1xaHF.png";
const ServiceThree = "/build/assets/servicesthree-BNTx24ZZ.png";
const ReviewMain = "/build/assets/reviews-Cxke9LuT.png";
const LoginScreen = "/build/assets/loginscreen-C2oZlAwV.png";
const RsourcesSliderOne = "/build/assets/resources-slider-one-CjM9hIdd.jpeg";
const ResourcesSliderTwo = "/build/assets/resources-slider-two-jUdrSYbW.jpeg";
const DashboardTopImage = "/build/assets/dashboardtopimage-BIILCmFW.png";
const FedExLogo = "/build/assets/fedexlogo-029B3Oli.svg";
const HomeIcon = "/build/assets/home-DyZ_0tFZ.svg";
const ShippingIcon = "/build/assets/shipping-CDL73q0L.svg";
const TrackingIocon = "/build/assets/track-DssG_MUC.svg";
const BillingIcon = "/build/assets/billing-Cbup2-fV.svg";
const AddressBookIcon = "/build/assets/bookaddress-Dbny4GUt.svg";
const AccountIcon = "/build/assets/account-jUzg1hig.svg";
const SupportIcon = "/build/assets/support-xYby5E79.svg";
const SettingsIcon = "/build/assets/settings-CXFlAXxh.svg";
const Signout = "/build/assets/signout-Dt_fqIEV.svg";
const NotifyTemplate = "/build/assets/notifytemplete-CUUqIECd.png";
const NotifyPreview = "/build/assets/notifypreview-l97DnXS5.png";
const useImages = () => {
  return {
    Logo,
    CanadaFlag,
    SearchIcon,
    Dot,
    ArrowRight,
    ArrowRightLg,
    ArrowLeft,
    MenuBurger,
    Close,
    PlayCircle,
    ServiceOne,
    ServiceTwo,
    ServiceThree,
    ChevronRight,
    ChevronRightBlack,
    ReviewMain,
    StarBlue,
    Avatar,
    AvatarTwo,
    LoginScreen,
    RsourcesSliderOne,
    ResourcesSliderTwo,
    Mail,
    GoogleBrandIcon,
    ArrowRightBlue,
    HomeIcon,
    ShippingIcon,
    TrackingIocon,
    BillingIcon,
    AddressBookIcon,
    AccountIcon,
    SupportIcon,
    SettingsIcon,
    Signout,
    DashboardTopImage,
    FedExLogo,
    ArrowRightDark,
    MoreIcon,
    UserIcon,
    CloseModel,
    CopyIcon,
    ArrowRightWhite,
    UploadIcon,
    Eye,
    DownloadPrimary,
    EditGray,
    DeletePrimary,
    NotifyTemplate,
    PlusPrimary,
    NotifyPreview,
    LinkPrimary
  };
};
const useImages$1 = useImages;
export {
  TextField as T,
  useImages$1 as u
};
