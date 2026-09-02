/**
 * Pre-paint reveal arming.
 *
 * The scroll-reveal system marks its hidden state under `html.js-reveal`, and
 * that class used to be added by the reveal controller after hydration. That
 * ordering has one consequence: anything already on screen has been painted
 * visible by the time the controller runs, so it can only be *switched* on, not
 * animated in — hiding it at that point would blink content that the reader is
 * already looking at. Which is why every hero on the site had entrance delays
 * written into it and no entrance: the delays were applied to elements that
 * were revealed in the same synchronous block that armed them.
 *
 * Arming before first paint fixes the ordering. The hidden state becomes the
 * first thing painted, so the opening of a page can actually be composed —
 * label, statement, argument, action, in that order — instead of appearing all
 * at once.
 *
 * Three conditions have to hold, and all of them are checked here rather than
 * after hydration, because after hydration is too late:
 *
 *   - the visitor has not asked for reduced motion
 *   - IntersectionObserver exists, so something can un-hide the rest
 *   - JavaScript ran at all, which is implied by this script executing
 *
 * The timeout is the failsafe. If the controller never arrives — a bundle that
 * fails to load, a network that drops between this script and the app — the
 * hidden state must not outlive the page load, because it is hiding real
 * content. Removing the class restores every element at once, and the abort
 * flag stops a late-arriving controller from hiding it all over again.
 */
export const REVEAL_ARM_ATTR = "data-reveal-ready";
export const REVEAL_ABORT_ATTR = "data-reveal-abort";

/** How long the controller has to take over before the page un-hides itself. */
const FAILSAFE_MS = 4000;

export const REVEAL_INIT_SCRIPT = `(function(){try{
var r=document.documentElement;
if(typeof IntersectionObserver==='undefined')return;
if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
r.classList.add('js-reveal');
setTimeout(function(){
if(!r.hasAttribute('${REVEAL_ARM_ATTR}')){r.setAttribute('${REVEAL_ABORT_ATTR}','');r.classList.remove('js-reveal');}
},${FAILSAFE_MS});
}catch(e){}})();`;
