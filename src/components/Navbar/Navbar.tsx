import {NavbarButton} from "@/components/Navbar/NavbarButton";
import {NavbarSearchBox} from "@/components/Navbar/NavbarSearchBox";
import {TabMenu} from "@/components/TabMenu/TabMenu";

export function Navbar() {
    return (
        <div className="p-3 bg-slate-100 flex-col border-b-2 border-solid border-gray-200">

            <div className="  flex justify-between">
                <div className="flex items-center space-x-4">
                    <NavbarButton>
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             viewBox="0 0 50 50">
                            <path
                                d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"></path>
                        </svg>
                    </NavbarButton>
                    <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32"
                         data-view-component="true">
                        <path
                            d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                    </svg>
                    <div className="text-sm">
                        facebook / <span className="font-bold"> react</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <NavbarSearchBox/>
                    <NavbarButton>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                             data-view-component="true" className="h-4 w-4">
                            <path
                                d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
                        </svg>
                    </NavbarButton>
                    <NavbarButton>
                        <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 16 16" version="1.1"
                             data-view-component="true">
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                            <path
                                d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                        </svg>
                    </NavbarButton>
                    <NavbarButton>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                             data-view-component="true" className="h-4 w-4">
                            <path
                                d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path>
                        </svg>
                    </NavbarButton>
                    <NavbarButton>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                             data-view-component="true" className="h-4 w-4">
                            <path
                                d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
                        </svg>
                    </NavbarButton>

                    <img src="https://avatars.githubusercontent.com/u/105966104?v=4"
                         className="w-9 h-9 rounded-full border-solid border-2 border-gray-200"
                         data-view-component="true"/>

                </div>
            </div>
            <TabMenu/>
        </div>)
}