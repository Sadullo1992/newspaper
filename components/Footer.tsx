import { useAppDispatch } from '@/redux/hooks';
import { showModal } from '@/redux/modalSlice';
import { useEffect, useRef, useState } from 'react';
import Button from './Button';
import Logo from './Logo';
import MenuIcon from './MenuIcon';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const dispatch = useAppDispatch();

  const handleScroll = () => {
    const el = footerRef.current;
    if (el?.getBoundingClientRect()) {
      if (el?.getBoundingClientRect()?.top >= window.innerHeight) {
        setIsMenuVisible(true);
      } else {
        setIsMenuVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <footer className="footer" ref={footerRef}>
      <div className="container">
        <div className="footer__inner">
          {isMenuVisible && (
            <Button className="mobile-menu" onClick={() => dispatch(showModal({ isModal: true }))}>
              <MenuIcon />
              <span>Bo&#39;limlar</span>
            </Button>
          )}
          <div className="footer__logo__wrapper">
            <Logo className="footer__logo" />
          </div>
          <p className="footer__text">“Bobotog‘ tongi” gazetasi barcha huquqlar himoyalangan.</p>
          <div className="footer__social">
            <a href="" className="footer__social__link">
              {socialIcon('instagram')}
            </a>
            <a href="" className="footer__social__link">
              {socialIcon('facebook')}
            </a>
            <a href="" className="footer__social__link">
              {socialIcon('telegram')}
            </a>
            <a href="" className="footer__social__link">
              {socialIcon('youtube')}
            </a>
          </div>
          <div className="footer__author">
            <p className="footer__text">Ishlab chiqaruvchi:</p>
            {authorLogo()}
          </div>
        </div>
      </div>
    </footer>
  );
}

function socialIcon(type: string) {
  let content = null;
  switch (type) {
    case 'instagram':
      {
        content = (
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z" />
          </svg>
        );
      }
      break;
    case 'facebook':
      {
        content = (
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z" />
          </svg>
        );
      }
      break;
    case 'telegram':
      {
        content = (
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM8.89113 13.1708L8.90378 13.1628C9.48351 15.0767 9.77337 16.0337 9.77337 16.0337C9.88564 16.3442 10.04 16.3996 10.2273 16.3743C10.4145 16.3489 10.5139 16.2476 10.6361 16.1297C10.6361 16.1297 11.0324 15.7472 11.825 14.9823L14.3759 16.8698C14.8407 17.1266 15.1763 16.9941 15.2917 16.4377L16.9495 8.61641C17.1325 7.88842 16.8115 7.59644 16.247 7.82754L6.51397 11.5871C5.84996 11.854 5.85317 12.2255 6.39308 12.3911L8.89113 13.1708Z" />
          </svg>
        );
      }
      break;
    case 'youtube':
      {
        content = (
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884V11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991H11.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z" />
          </svg>
        );
      }
      break;
  }
  return content;
}

function authorLogo() {
  return (
    <svg width="86" height="24" viewBox="0 0 86 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M74.8067 4.82305C74.0864 4.82305 73.1502 5.13672 73.1502 6.46381V7.76675H75.815V10.5174H73.1502V19.6381H69.9331V10.5174H67.9644V7.76675H69.9331V6.41554C69.9331 3.73727 71.6136 2 74.2304 2C74.9027 2 75.5509 2.12065 75.815 2.24128V4.9437C75.6469 4.89544 75.3348 4.82305 74.8067 4.82305ZM47.4625 15.7292L44.7257 16.3325C44.8697 17.6837 46.094 20 49.6472 20C52.7442 20 54.2327 18.0215 54.2327 16.0911C54.2327 14.3539 53.0563 12.9303 50.7276 12.4477L49.047 12.0858C48.3988 11.9651 47.9666 11.6032 47.9666 11.0241C47.9666 10.3485 48.6389 9.84183 49.4791 9.84183C50.8236 9.84183 51.3277 10.7346 51.4238 11.4343L54.0887 10.8311C53.9447 9.55228 52.8162 7.40482 49.4551 7.40482C46.9103 7.40482 45.0377 9.16622 45.0377 11.2895C45.0377 12.9544 46.07 14.3298 48.3508 14.8364L49.9114 15.1983C50.8236 15.3914 51.1837 15.8257 51.1837 16.3565C51.1837 16.984 50.6796 17.5388 49.6232 17.5388C48.2308 17.5388 47.5345 16.6702 47.4625 15.7292ZM64.3397 13.7024C64.3397 15.9464 62.8992 17.0804 61.3387 17.0804C59.7781 17.0804 58.3376 15.9222 58.3376 13.7024C58.3376 11.4584 59.7781 10.3244 61.3387 10.3244C62.8992 10.3244 64.3397 11.4584 64.3397 13.7024ZM67.5326 13.7024C67.5326 10.0349 64.8678 7.40482 61.3387 7.40482C57.8095 7.40482 55.1447 10.0349 55.1447 13.7024C55.1447 17.3458 57.8095 20 61.3387 20C64.8678 20 67.5326 17.3458 67.5326 13.7024ZM81.6233 7.76675V4.21984H78.7423V5.88471C78.7423 6.94638 78.1661 7.76675 76.9177 7.76675H76.3175V10.6139H78.4542V16.1394C78.4542 18.4316 79.8947 19.807 82.1994 19.807C83.1358 19.807 83.7119 19.6381 84 19.5174V16.8633C83.832 16.9115 83.3998 16.9598 83.0156 16.9598C82.1034 16.9598 81.6233 16.622 81.6233 15.5844V10.6139H84V7.76675H81.6233ZM10.8506 19.6341C10.8025 19.3928 10.7545 18.8379 10.7545 18.3552C10.1063 19.4652 8.73787 19.9477 7.48946 19.9477C4.63253 19.9477 3 17.8486 3 15.2667V7.76275H6.19304V14.6153C6.19304 15.9424 6.86526 17.004 8.35375 17.004C9.77021 17.004 10.5865 16.0389 10.5865 14.6635V7.76275H13.7795V17.4866C13.7795 18.4036 13.8516 19.2238 13.8996 19.6341H10.8506ZM14.6903 19.6341H24.4615V16.8351H18.6036L24.3655 10.441V7.76275H14.8344V10.5375H20.2842L14.6903 16.811V19.6341ZM32.7697 15.0612C32.6255 16.2213 31.8366 17.004 30.561 17.004C29.0725 17.004 28.4003 15.9424 28.4003 14.6153V7.76275H25.2072V15.2667C25.2072 17.8486 26.8398 19.9477 29.6968 19.9477C30.7819 19.9477 31.9577 19.5831 32.6724 18.7588C33.103 17.745 33.7327 16.3058 34.367 14.9552C34.74 14.1611 35.1149 13.397 35.4518 12.7679C35.788 12.1404 36.0892 11.6419 36.3149 11.383L36.3192 11.3868C36.6851 10.7577 37.3207 10.3524 38.1715 10.3524C39.708 10.3524 40.3562 11.3899 40.3562 12.717V19.6419H43.5492V12.162C43.5492 9.55617 42.2048 7.45697 39.2759 7.45697C38.0707 7.45697 36.7364 7.95476 35.9868 9.05282V7.76275H32.7937V7.77064H32.7697V15.0612ZM36.1009 11.8831C36.0475 12.0508 36.0094 12.2279 35.9868 12.4123V17.4866C35.9868 18.4036 36.0588 19.2238 36.1068 19.6341H35.9628V19.6419H32.7697V18.837C33.2 17.8228 33.8356 16.3696 34.4755 15.0069C34.8481 14.2137 35.2219 13.4517 35.5574 12.8252C35.7554 12.4556 35.9393 12.1348 36.1009 11.8831Z"
        fill="white"
      />
    </svg>
  );
}
