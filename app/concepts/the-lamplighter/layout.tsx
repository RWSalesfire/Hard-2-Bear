import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './lamplighter.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--lp-serif',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--lp-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Lamplighter | Concept pub website by Hard To Bear',
  description: 'A concept website for a village pub, made by Hard To Bear. The Lamplighter is not a real pub.',
  robots: { index: false, follow: false },
};

// Picks day or night before the first paint, from UK time and a rough sunrise and sunset per month,
// so a visitor at 9pm never sees a flash of the daytime site. ?time=day|night overrides it.
const RISE = [490, 450, 390, 390, 330, 285, 300, 350, 400, 450, 435, 480];
const SET = [990, 1040, 1090, 1200, 1250, 1290, 1275, 1220, 1155, 1090, 980, 955];
const pickTime = `(function(){try{var el=document.currentScript.parentElement,q=new URLSearchParams(location.search).get('time'),s=null;try{s=sessionStorage.getItem('lp-time')}catch(e){}var t=q==='day'||q==='night'?q:s;if(t!=='day'&&t!=='night'){var p=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/London',month:'numeric',hour:'numeric',minute:'numeric',hourCycle:'h23'}).formatToParts(new Date()),g=function(k){return +p.filter(function(x){return x.type===k})[0].value},m=g('month')-1,n=g('hour')*60+g('minute');t=n>=${JSON.stringify(SET)}[m]||n<${JSON.stringify(RISE)}[m]?'night':'day'}el.dataset.time=t}catch(e){}})();`;

export default function LamplighterLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`lp ${fraunces.variable} ${manrope.variable}`} data-time="day" suppressHydrationWarning>
      <script dangerouslySetInnerHTML={{ __html: pickTime }} />
      {children}
    </div>
  );
}
