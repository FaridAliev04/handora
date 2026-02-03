// import TextComponent from "./components/info/info.component";

import InfoComponent from "./components/info/info.component";
import SuggestedComponent from "./components/suggested/suggested.component";

const HomeComponent = () => {
    return (
        <div>
            {/* <TextComponent/> */}
            <InfoComponent/>
            <SuggestedComponent/>
        </div>
    );
}

export default HomeComponent;