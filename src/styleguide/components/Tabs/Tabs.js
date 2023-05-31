import React, {useState, useEffect} from 'react'
import { View } from 'react-native-web'
import styles from './Tabs.style'
import Tab from './Tab/Tab'

const Tabs = ({
    tabsInfo,
    topStickValue,
}) => {

    const [selectedTabIndex, setSelectedTabIndex] = useState(0)
    
    const renderTabs = () => {
        return tabsInfo.map((tabInfo, index) => {
            return (
                <Tab
                    key={index}
                    label={tabInfo.label}
                    selectThisTab={() => setSelectedTabIndex(index)}
                    selectedTabIndex={selectedTabIndex}
                    index={index}           
                />
            )
        })
    }

    return (
        <>
            <View
                style={[styles.tabsContainer, topStickValue ? {...styles.stickyTabsContainer, top: topStickValue} : null]}
            >
                {
                    renderTabs()
                }
            </View>
            <View
                style={styles.tabsContentContainer}
            >
                {
                    tabsInfo[selectedTabIndex].content
                }
            </View>
        </>
    )
}

export default Tabs