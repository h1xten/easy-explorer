import React from 'react'
import { useState, useEffect } from "react";
import * as HyphenWidget from "@biconomy/hyphen-widget";
import "@biconomy/hyphen-widget/dist/index.css";

const Swap = () => {
    const [hyphenWidget, setHyphenWidget] = useState();

    useEffect(() => {
        const widget = HyphenWidget.default.init(
        document.getElementById("widget"),
        {
            tag: 'EasyExplorer',
            env: 'test',
            dAppName: "EasyExplorer",
            showWidget: true,
        }
        );

        if (widget) {
        setHyphenWidget(widget);
        }
    }, []);

  return (
    <div id="widget"></div>
  )
}

export default Swap