import React from "react";

import Highlight, {defaultProps} from 'prism-react-renderer';

import styles from "./styles.module.css";

export function Type({ children }) {
  return <div>
           <Highlight {...defaultProps} code={children} language="haskell">
             {
               ({className, tokens, getLineProps, getTokenProps}) => (
                 <pre>
                   <code className={className}>
                      {
                        tokens[0].map((token, key) => (
                          <span key={key} {...getTokenProps({token})} />
                        ))
                      }
                    </code>
                  </pre>
                )}
           </Highlight>
           <div className={styles.buttonGroup}>
             <a>?</a>
           </div>
         </div>;
}