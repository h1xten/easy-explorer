import React from 'react'
import { useState, useEffect } from "react";
import * as HyphenWidget from "@biconomy/hyphen-widget";
import "@biconomy/hyphen-widget/dist/index.css";

const HyphenPage = () => {
    const [hyphenWidget, setHyphenWidget] = useState();

    useEffect(() => {
        const widget = HyphenWidget.default.init(
        document.getElementById("widget"),
        {
            tag: 'EasyExplorer',
            env: 'test',
            dAppName: "EasyExplorer",
            showWidget: true,
            showCloseButton: false,
        }
        );

        if (widget) {
        setHyphenWidget(widget);
        }
    }, []);
  return (
    <div className='hyphen-page'>
        <div className='wrapper widget-container'>
            <div className='hyphen__content'>
                <h4>Hyphen Widget</h4>
                <div id="widget"></div>
            </div>
        </div>
    </div>
  )
}

export default HyphenPage