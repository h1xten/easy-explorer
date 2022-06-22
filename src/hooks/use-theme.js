import { useLayoutEffect, useState } from "react"

export const useTheme = () => {
    const [theme, setTheme] = useState( localStorage.getItem('app-theme') || 'light')
    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('app-theme', theme)
        theme === 'dark' 
            ? document.getElementById('switcher').classList.add('ant-switch-checked')
            : document.getElementById('switcher').classList.remove('ant-switch-checked')
    }, [theme])

    return {theme, setTheme}
}