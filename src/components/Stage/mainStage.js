// import '../../assests/css/main.css';
// import '../../assests/css/panic.css'
// import '../../assests/css/window.css'
// import '../../assests/css/Load_Save.css'
// import '../../assests/css/settings.css'
// import "../../assests/css/UI_component.css"
// import '../../core/storeControl/storeControl'
import {setAutoWaitTime,autoWaitTime,textShowWatiTime,
    GameInfo,currentScene,auto,fast,onTextPreview,showingText,hideTextStatus,
    currentInfo,Saves,SaveBacklog,CurrentBacklog,currentSavePage,currentLoadPage,Settings,
    loadCookie,writeCookie,clearCookie,loadSettings,getStatus,getScene,getGameInfo}
    from "../../core/storeControl/storeControl";
import {userInteract} from "../../core/interactController/userInteract";
import {nextSentenceProcessor,increaseSentence} from "../../core/WG_core";
import {WG_ViewControl} from "../../core/viewController/viewControl";
import closeB from "../../assests/img/closeBlack.svg"
import closeW from "../../assests/img/closeWhite.svg"
import up from "../../assests/img/up.svg";
import cross from "../../assests/img/cross.svg";

window.onload = function () {
    loadCookie();
    loadSettings();
    getGameInfo();
}

function Stage() {
    return (
        <div className="Stage">
            <div id="intro" className="intro_styl"/>
            <div id="MesModel"/>
            <div id="Title">
                <div id="TitleModel">
                    <div id="setButtonBottom">
                        <div className="TitleSingleButton" id="leftTitleButton" onClick={userInteract.hideTitle}>开始游戏</div>
                        <div className="TitleSingleButton" onClick={userInteract.continueGame}>继续游戏</div>
                        <div className="TitleSingleButton" onClick={userInteract.onLoadGame}>读取存档</div>
                        <div className="TitleSingleButton" onClick={userInteract.onSetting}>设置界面</div>
                        <div className="TitleSingleButton" onClick={userInteract.exit}>退出游戏</div>
                    </div>

                </div>
            </div>
            <div id="mainBackground" onClick={userInteract.clickOnBack}>
            </div>
            <div id="figureImage" onClick={userInteract.clickOnBack}/>
            <div id="figureImage_left" onClick={userInteract.clickOnBack}/>
            <div id="figureImage_right" onClick={userInteract.clickOnBack}/>
            <div id="settings">
                <div id="settingsMainBox">
                    <div id="close" onClick={userInteract.closeSettings}>
                        <img src={closeB} className="closeSVG" alt="close"/>
                    </div>
                    <div id="settingsTitle">
                        设置
                    </div>
                    <div id="settingItems"/>
                    <div id="textPreview"/>
                </div>
            </div>
            <div id="backlog">
                <div id="closeBl" onClick={userInteract.closeBacklog}>
                    <img src={closeW} className="closeSVG" alt="close"/>
                </div>
                <div id="backlogContent"/>
            </div>
            <div id="Load" className="LS_Main">
                <div id="loadMainBox" className="LS_mainBox">
                    <div id="closeLoad" onClick={userInteract.closeLoad}>
                        <img src={closeB} className="closeSVG" id="LoadClose" alt="close"/>
                    </div>
                    <div id="LoadTitle">
                        读档
                    </div>
                    <div id="LoadItems" className="LS_Items">

                    </div>
                </div>
            </div>
            <div id="Save" className="LS_Main">
                <div id="saveMainBox" className="LS_mainBox">
                    <div id="closeSave" onClick={userInteract.closeSave}>
                        <img src={closeB} className="closeSVG" alt="close"/>
                    </div>
                    <div id="SaveTitle">
                        存档
                    </div>
                    <div id="SaveItems" className="LS_Items">

                    </div>
                </div>
            </div>
            <div id="chooseBox"/>
            <div id="bottomBox">
                <div id="top_control">
                    <span className="top_button" onClick={userInteract.hideTextBox}>
                        <img src={cross} style={{width: "22px",height: "22px"}}/>
                    </span>
                    <span className="top_button" onClick={userInteract.showBacklog}>
                        <img src={up} style={{width: "25px",height: "25px"}}/>
                    </span>
                </div>
                <div id="mainTextWindow" onClick={nextSentenceProcessor}>
                    <div id="pName"/>
                    <div id="SceneText"/>
                </div>
                <div id="controlBar">
                    <div className="controlButton" onClick={WG_ViewControl.playVocal}>重播</div>
                    <div className="controlButton" onClick={userInteract.autoNext} id="autoButton">自动</div>
                    <div className="controlButton" onClick={userInteract.fastNext} id="fastButton">快进</div>
                    <div className="controlButton" onClick={userInteract.onSaveGame} id="saveButton">存档</div>
                    <div className="controlButton" onClick={userInteract.onLoadGame} id="loadButton">读档</div>
                    <div className="controlButton" onClick={userInteract.onSetting}>设置</div>
                    <div className="controlButton" onClick={userInteract.Title} id="titleButton">标题</div>
                </div>
            </div>
            <div id="bgm"/>
            <div id="vocal"/>
            <div id="panic-overlay"/>
        </div>
    );
}

export default Stage;