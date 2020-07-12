import React from 'react'
import { FacebookProvider, MessageUs, CustomChat,SendToMessenger} from 'react-facebook';
function mess() {
    return (
        
        <React.Fragment>
            <FacebookProvider appId="275939346842688">
                <MessageUs messengerAppId="275939346842688" pageId="110463107407022"/>
            </FacebookProvider> 
            <FacebookProvider appId="275939346842688" chatSupport>
                <CustomChat pageId="110463107407022" minimized={false}/>
            </FacebookProvider> 
            <FacebookProvider appId="275939346842688">
                <SendToMessenger messengerAppId="275939346842688" pageId="110463107407022"/>
            </FacebookProvider>
        </React.Fragment>
    )
}

export default mess
