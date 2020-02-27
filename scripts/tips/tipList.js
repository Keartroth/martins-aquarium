import { useTips } from "./tipDataProvider.js";
import tip from "./tip.js";


/**
 *  tipList which renders individual tip objects as HTML
 */
const tipList = () => {
    const contentElement = document.querySelector(".tipList");
    const tipObject = useTips();
    const tipHeader = `
    <header>
        <h3 class="oswald">Martin's Tips</h3>
    </header>`;

    contentElement.innerHTML += tipHeader;

    for (const tips of tipObject) {
        contentElement.innerHTML += tip(tips);
    }
}

export default tipList