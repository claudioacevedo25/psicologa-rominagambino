import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

import style from "../footer.module.css";
import Link from "next/link";

export const socialContacts = [
  {
    key: "wapp",
    icon: WhatsAppIcon,
    href: "https://wa.me/+543516834180",
  },
  {
    key: "instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/psico_romi/?hl=es-la",
  },
  {
    key: "email",
    icon: MailOutlineIcon,
    href: "mailto:romy.gambino@gmail.com",
  },
  {
    key: "phone",
    icon: PhoneIphoneIcon,
    href: "tel:+543516834180",
  },
];

const SocialMedia = () => {
  return (
    <div className={style.socialMedia}>
      {socialContacts.map(({ key, icon: Icon, href }) => {
        return (
          <Link key={key} href={href}>
            <a target="_blank" aria-label={`Logo ${key}`}>
              <Icon />
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default SocialMedia;
