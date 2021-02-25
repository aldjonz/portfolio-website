const designerSvg = (props) => (
    
        <svg className={ props.svgLoaded ? "designerAnim designer" : "designer" } width="100%" height="100%" viewBox="0 0 490 132" fill="none" xmlns="http://www.w3.org/2000/svg">
            
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
                <path d="M60.4688 86.7656C56.9063 84.3281 54.3281 81.3281 52.7344 77.7656C51.1406 74.1094 49.9688 70.2188 49.2188 66.0938H47.6719C40.0781 72.2812 33.4688 76.9219 27.8438 80.0156C22.3125 83.1094 17.625 85.0312 13.7813 85.7812C9.93751 86.4375 6.93751 86.1094 4.78126 84.7969C2.62501 83.4844 1.21876 81.6094 0.562506 79.1719C6.10948e-06 76.6406 0.140631 73.6875 0.984381 70.3125C1.82813 66.9375 3.28126 63.5625 5.34376 60.1875C7.40626 56.7188 10.0781 53.4375 13.3594 50.3438C16.6406 47.25 20.3906 44.7188 24.6094 42.75C28.9219 40.7812 33.6563 39.5625 38.8125 39.0938C44.0625 38.5312 49.6875 39.0938 55.6875 40.7812L57.2344 39.0938L76.2188 0.984375C78.75 1.35938 80.25 2.48438 80.7188 4.35938C81.1875 6.23438 81.1406 8.29688 80.5781 10.5469C80.1094 12.7969 79.3594 15 78.3281 17.1562C77.3906 19.2188 76.6875 20.7188 76.2188 21.6562C75.9375 22.2188 75.375 23.2969 74.5313 24.8906C73.7813 26.4844 72.8438 28.4062 71.7188 30.6562C70.6875 32.8125 69.5625 35.1094 68.3438 37.5469C67.125 39.9844 65.9531 42.3281 64.8281 44.5781C63.7969 46.7344 62.8594 48.6562 62.0156 50.3438C61.1719 51.9375 60.6563 52.9688 60.4688 53.4375C58.7813 56.9062 57.9844 60.6094 58.0781 64.5469C58.2656 68.3906 58.5 72.0938 58.7813 75.6562C59.1563 77.3438 59.9063 78.75 61.0313 79.875C62.1563 80.9062 63.3281 81.8906 64.5469 82.8281C65.8594 83.6719 67.125 84.5156 68.3438 85.3594C69.6563 86.2031 70.7344 87.2344 71.5781 88.4531C71.2031 89.6719 70.4531 90.2812 69.3281 90.2812C68.2031 90.375 67.0313 90.1875 65.8125 89.7188C64.5938 89.25 63.4688 88.6875 62.4375 88.0312C61.4063 87.375 60.75 86.9531 60.4688 86.7656ZM8.01563 80.4375C8.39063 82.0312 9.79688 82.5 12.2344 81.8438C14.7656 81.1875 17.7188 79.8281 21.0938 77.7656C24.4688 75.6094 28.0313 73.0312 31.7813 70.0312C35.625 67.0312 39.0469 64.0312 42.0469 61.0312C45.1406 58.0312 47.5313 55.2656 49.2188 52.7344C51 50.2031 51.5625 48.3281 50.9063 47.1094C48 45.5156 44.7656 44.7188 41.2031 44.7188C37.6406 44.7188 34.0781 45.375 30.5156 46.6875C27.0469 47.9062 23.6719 49.6875 20.3906 52.0312C17.2031 54.2812 14.4844 56.9062 12.2344 59.9062C10.0781 62.9062 8.53126 66.1875 7.59376 69.75C6.75001 73.2188 6.89063 76.7812 8.01563 80.4375Z" fill="#D6D6D6"/>
                <path d="M88.4531 88.4531C85.6406 87.5156 83.4844 86.1094 81.9844 84.2344C80.5781 82.2656 79.6406 80.1094 79.1719 77.7656C78.7031 75.4219 78.6094 72.9844 78.8906 70.4531C79.2656 67.8281 79.8281 65.3438 80.5781 63C83.3906 60 86.5313 56.5781 90 52.7344C93.5625 48.7969 97.3125 44.9531 101.25 41.2031C105.188 37.4531 109.266 33.9844 113.484 30.7969C117.797 27.5156 122.156 25.0312 126.563 23.3438C128.063 22.6875 129.234 22.7344 130.078 23.4844C131.016 24.1406 131.672 25.2188 132.047 26.7188C132.422 28.2188 132.562 29.9531 132.469 31.9219C132.469 33.8906 132.328 35.8125 132.047 37.6875C131.766 39.5625 131.391 41.25 130.922 42.75C130.453 44.25 129.984 45.2812 129.516 45.8438C128.391 47.1562 126.188 48.7031 122.906 50.4844C119.719 52.2656 116.156 54.2344 112.219 56.3906C108.281 58.4531 104.344 60.6094 100.406 62.8594C96.4688 65.1094 93.2344 67.3594 90.7031 69.6094C88.1719 71.7656 86.6719 73.9219 86.2031 76.0781C85.7344 78.2344 87.0469 80.2031 90.1406 81.9844C93.3281 82.3594 97.1719 82.2188 101.672 81.5625C106.266 80.8125 110.906 79.875 115.594 78.75C120.375 77.5312 124.969 76.3125 129.375 75.0938C133.781 73.7812 137.391 72.75 140.203 72L141.891 73.5469C139.828 76.2656 136.453 78.75 131.766 81C127.078 83.25 122.016 85.125 116.578 86.625C111.141 88.0312 105.844 88.9688 100.688 89.4375C95.5313 89.8125 91.4531 89.4844 88.4531 88.4531ZM122.063 34.7344C121.969 34.6406 121.266 35.0625 119.953 36C118.641 36.8438 117 38.0156 115.031 39.5156C113.156 40.9219 111.094 42.5156 108.844 44.2969C106.688 45.9844 104.672 47.5781 102.797 49.0781C101.016 50.5781 99.5156 51.8906 98.2969 53.0156C97.0781 54.0469 96.5625 54.5625 96.75 54.5625C98.25 54.8438 100.172 54.6562 102.516 54C104.953 53.25 107.438 52.2188 109.969 50.9062C112.594 49.5938 115.078 48.1406 117.422 46.5469C119.766 44.8594 121.594 43.2188 122.906 41.625C124.313 40.0312 125.016 38.625 125.016 37.4062C125.109 36.1875 124.125 35.2969 122.063 34.7344Z" fill="#D6D6D6"/>
                <path d="M141.75 88.4531C140.625 87.7031 140.578 86.7188 141.609 85.5C142.734 84.1875 144.469 82.8281 146.812 81.4219C149.25 79.9219 152.062 78.375 155.25 76.7812C158.438 75.1875 161.484 73.6875 164.391 72.2812C167.391 70.875 170.016 69.6562 172.266 68.625C174.516 67.5 175.969 66.6562 176.625 66.0938C179.719 63.4688 181.312 61.3125 181.406 59.625C181.594 57.8438 180.844 56.4375 179.156 55.4062C177.469 54.2812 175.078 53.4375 171.984 52.875C168.984 52.2188 165.844 51.6562 162.562 51.1875C159.375 50.625 156.281 50.0625 153.281 49.5C150.375 48.9375 148.172 48.1875 146.672 47.25C145.172 46.3125 144.656 45.0938 145.125 43.5938C145.688 42 147.75 39.9844 151.312 37.5469C152.625 36.6094 154.547 35.25 157.078 33.4688C159.609 31.6875 162.328 29.8594 165.234 27.9844C168.234 26.1094 171.188 24.4219 174.094 22.9219C177 21.4219 179.438 20.4375 181.406 19.9688C182.438 19.7812 183.469 19.875 184.5 20.25C185.625 20.625 186.516 21.1875 187.172 21.9375C187.828 22.5938 188.109 23.3438 188.016 24.1875C188.016 25.0312 187.406 25.7812 186.188 26.4375C180.844 29.4375 175.688 32.25 170.719 34.875C165.844 37.5 160.922 40.5 155.953 43.875C155.672 44.625 155.719 45.2812 156.094 45.8438C156.562 46.4062 157.078 46.8281 157.641 47.1094C167.578 48.1406 175.031 49.5938 180 51.4688C185.062 53.3438 188.25 55.4062 189.562 57.6562C190.969 59.9062 190.828 62.2969 189.141 64.8281C187.453 67.3594 184.922 69.8438 181.547 72.2812C178.266 74.7188 174.469 77.0156 170.156 79.1719C165.844 81.3281 161.672 83.1562 157.641 84.6562C153.703 86.1562 150.234 87.2812 147.234 88.0312C144.234 88.7812 142.406 88.9219 141.75 88.4531Z" fill="#D6D6D6"/>
                <path d="M194.906 88.4531C198.75 76.0781 202.219 66.2812 205.312 59.0625C208.5 51.75 211.125 46.6406 213.188 43.7344C215.344 40.8281 216.797 39.8906 217.547 40.9219C218.297 41.9531 218.203 44.5781 217.266 48.7969C216.422 53.0156 214.547 58.6875 211.641 65.8125C208.828 72.8438 204.844 80.9062 199.688 90C198.938 90.2812 198.047 90.3281 197.016 90.1406C195.984 89.9531 195.281 89.3906 194.906 88.4531ZM219.516 20.8125C219.328 20.3438 219.234 19.5 219.234 18.2812C219.234 17.0625 219.328 16.3125 219.516 16.0312C221.672 15.2812 223.312 15.1875 224.438 15.75C225.562 16.3125 226.266 17.1562 226.547 18.2812C226.828 19.3125 226.781 20.4375 226.406 21.6562C226.125 22.875 225.609 23.8125 224.859 24.4688C224.109 25.0312 223.219 25.125 222.188 24.75C221.25 24.2812 220.359 22.9688 219.516 20.8125Z" fill="#D6D6D6"/>
                <path d="M210.094 129.656C207.188 128.625 204.844 127.078 203.062 125.016C201.188 122.953 199.781 120.703 198.844 118.266C197.812 115.922 197.203 113.531 197.016 111.094C196.734 108.656 196.781 106.5 197.156 104.625C197.438 102.75 198 101.297 198.844 100.266C199.594 99.3281 200.484 99.0938 201.516 99.5625C201.422 107.719 202.406 113.859 204.469 117.984C206.438 122.203 209.062 124.828 212.344 125.859C215.531 126.984 219.188 126.75 223.312 125.156C227.344 123.562 231.422 121.078 235.547 117.703C239.766 114.422 243.75 110.438 247.5 105.75C251.344 101.156 254.578 96.3281 257.203 91.2656C259.828 86.2969 261.703 81.375 262.828 76.5C263.953 71.5312 263.906 67.0312 262.688 63C254.25 69.0938 247.688 72.9375 243 74.5312C238.312 76.125 235.031 76.2188 233.156 74.8125C231.375 73.3125 230.812 70.6875 231.469 66.9375C232.125 63.1875 233.531 59.0625 235.688 54.5625C237.844 50.0625 240.562 45.5625 243.844 41.0625C247.125 36.4688 250.5 32.625 253.969 29.5312C257.438 26.4375 260.766 24.4688 263.953 23.625C267.234 22.7812 269.953 23.7656 272.109 26.5781C274.266 29.4844 275.625 33.4219 276.188 38.3906C276.75 43.2656 276.609 48.7031 275.766 54.7031C274.922 60.7031 273.422 66.9844 271.266 73.5469C269.203 80.1094 266.625 86.4844 263.531 92.6719C260.438 98.9531 256.875 104.766 252.844 110.109C248.906 115.453 244.641 119.906 240.047 123.469C235.453 127.031 230.625 129.422 225.562 130.641C220.5 131.953 215.344 131.625 210.094 129.656ZM238.781 59.9062C238.688 60.1875 238.594 60.7031 238.5 61.4531C238.5 62.2031 238.5 63 238.5 63.8438C238.5 64.6875 238.5 65.4844 238.5 66.2344C238.594 66.9844 238.688 67.5 238.781 67.7812C241.781 68.5312 244.875 67.8281 248.062 65.6719C251.25 63.5156 254.156 60.75 256.781 57.375C259.5 54 261.75 50.4375 263.531 46.6875C265.406 42.9375 266.531 39.7969 266.906 37.2656C267.375 34.7344 266.906 33.3281 265.5 33.0469C264.094 32.6719 261.516 34.1719 257.766 37.5469C256.641 38.5781 255.141 39.9844 253.266 41.7656C251.391 43.5469 249.469 45.4688 247.5 47.5312C245.625 49.5938 243.844 51.75 242.156 54C240.562 56.1562 239.438 58.125 238.781 59.9062Z" fill="#D6D6D6"/>
                <path d="M334.828 88.4531C334.547 85.3594 334.781 82.3125 335.531 79.3125C336.375 76.2188 337.453 73.2188 338.766 70.3125C340.172 67.3125 341.625 64.3594 343.125 61.4531C344.719 58.4531 346.078 55.5469 347.203 52.7344C348.328 49.8281 349.125 47.0156 349.594 44.2969C350.062 41.4844 349.875 38.7188 349.031 36C346.688 35.1562 343.969 35.3438 340.875 36.5625C337.875 37.7812 334.688 39.6562 331.312 42.1875C327.938 44.625 324.422 47.5312 320.766 50.9062C317.203 54.1875 313.688 57.5625 310.219 61.0312C306.844 64.4062 303.609 67.6406 300.516 70.7344C297.422 73.8281 294.609 76.4062 292.078 78.4688C289.641 80.4375 287.578 81.7031 285.891 82.2656C284.203 82.7344 283.078 82.125 282.516 80.4375C282.422 80.3438 282.938 79.1719 284.062 76.9219C285.281 74.5781 286.734 71.6719 288.422 68.2031C290.203 64.7344 292.125 60.9844 294.188 56.9531C296.344 52.9219 298.359 49.1719 300.234 45.7031C302.109 42.1406 303.75 39.1406 305.156 36.7031C306.562 34.2656 307.453 32.9531 307.828 32.7656C309.797 34.0781 310.781 35.5312 310.781 37.125C310.875 38.625 310.641 40.2188 310.078 41.9062C309.516 43.5 308.859 45.1406 308.109 46.8281C307.453 48.5156 307.359 50.2031 307.828 51.8906C309.328 50.8594 311.391 49.4531 314.016 47.6719C316.734 45.7969 319.641 43.875 322.734 41.9062C325.922 39.9375 329.203 38.0156 332.578 36.1406C336.047 34.2656 339.281 32.8125 342.281 31.7812C345.281 30.6562 347.953 30.0469 350.297 29.9531C352.734 29.8594 354.516 30.5625 355.641 32.0625C356.766 33.5625 357.094 36.0469 356.625 39.5156C356.25 42.8906 354.797 47.5312 352.266 53.4375C351.984 54.0938 351.281 55.6875 350.156 58.2188C349.125 60.6562 347.953 63.3281 346.641 66.2344C345.422 69.0469 344.25 71.7188 343.125 74.25C342.094 76.6875 341.438 78.2344 341.156 78.8906C341.062 79.2656 340.922 79.9688 340.734 81C340.641 81.9375 340.5 83.0156 340.312 84.2344C340.125 85.3594 339.844 86.4844 339.469 87.6094C339.094 88.6406 338.625 89.4375 338.062 90C337.5 90.5625 336.844 90.5156 336.094 89.8594C335.344 89.1094 334.922 88.6406 334.828 88.4531Z" fill="#D6D6D6"/>
                <path d="M372.938 88.4531C370.125 87.5156 367.969 86.1094 366.469 84.2344C365.062 82.2656 364.125 80.1094 363.656 77.7656C363.188 75.4219 363.094 72.9844 363.375 70.4531C363.75 67.8281 364.312 65.3438 365.062 63C367.875 60 371.016 56.5781 374.484 52.7344C378.047 48.7969 381.797 44.9531 385.734 41.2031C389.672 37.4531 393.75 33.9844 397.969 30.7969C402.281 27.5156 406.641 25.0312 411.047 23.3438C412.547 22.6875 413.719 22.7344 414.562 23.4844C415.5 24.1406 416.156 25.2188 416.531 26.7188C416.906 28.2188 417.047 29.9531 416.953 31.9219C416.953 33.8906 416.812 35.8125 416.531 37.6875C416.25 39.5625 415.875 41.25 415.406 42.75C414.938 44.25 414.469 45.2812 414 45.8438C412.875 47.1562 410.672 48.7031 407.391 50.4844C404.203 52.2656 400.641 54.2344 396.703 56.3906C392.766 58.4531 388.828 60.6094 384.891 62.8594C380.953 65.1094 377.719 67.3594 375.188 69.6094C372.656 71.7656 371.156 73.9219 370.688 76.0781C370.219 78.2344 371.531 80.2031 374.625 81.9844C377.812 82.3594 381.656 82.2188 386.156 81.5625C390.75 80.8125 395.391 79.875 400.078 78.75C404.859 77.5312 409.453 76.3125 413.859 75.0938C418.266 73.7812 421.875 72.75 424.688 72L426.375 73.5469C424.312 76.2656 420.938 78.75 416.25 81C411.562 83.25 406.5 85.125 401.062 86.625C395.625 88.0312 390.328 88.9688 385.172 89.4375C380.016 89.8125 375.938 89.4844 372.938 88.4531ZM406.547 34.7344C406.453 34.6406 405.75 35.0625 404.438 36C403.125 36.8438 401.484 38.0156 399.516 39.5156C397.641 40.9219 395.578 42.5156 393.328 44.2969C391.172 45.9844 389.156 47.5781 387.281 49.0781C385.5 50.5781 384 51.8906 382.781 53.0156C381.562 54.0469 381.047 54.5625 381.234 54.5625C382.734 54.8438 384.656 54.6562 387 54C389.438 53.25 391.922 52.2188 394.453 50.9062C397.078 49.5938 399.562 48.1406 401.906 46.5469C404.25 44.8594 406.078 43.2188 407.391 41.625C408.797 40.0312 409.5 38.625 409.5 37.4062C409.594 36.1875 408.609 35.2969 406.547 34.7344Z" fill="#D6D6D6"/>
                <path d="M426.234 88.4531C426.047 88.3594 426.047 87.2812 426.234 85.2188C426.516 83.0625 426.891 80.3906 427.359 77.2031C427.828 74.0156 428.438 70.5 429.188 66.6562C429.938 62.8125 430.734 59.1562 431.578 55.6875C432.422 52.125 433.312 49.0312 434.25 46.4062C435.281 43.6875 436.266 41.8125 437.203 40.7812C437.859 40.125 438.516 40.125 439.172 40.7812C439.828 41.3438 440.484 42.0938 441.141 43.0312C441.797 43.875 442.453 44.6719 443.109 45.4219C443.766 46.0781 444.469 46.125 445.219 45.5625C447.844 41.9062 450.703 38.4375 453.797 35.1562C456.984 31.7812 460.5 28.875 464.344 26.4375C464.719 26.1562 465.75 25.7344 467.438 25.1719C469.125 24.5156 471.047 23.9062 473.203 23.3438C475.359 22.6875 477.562 22.1719 479.812 21.7969C482.156 21.3281 484.125 21.1406 485.719 21.2344C487.406 21.2344 488.531 21.6562 489.094 22.5C489.75 23.25 489.469 24.5625 488.25 26.4375C482.625 26.5312 477.375 28.1719 472.5 31.3594C467.625 34.5469 463.125 38.4844 459 43.1719C454.875 47.8594 451.125 52.9688 447.75 58.5C444.375 63.9375 441.422 69 438.891 73.6875C436.453 78.375 434.391 82.2656 432.703 85.3594C431.109 88.4531 429.938 90 429.188 90C429.094 90 428.672 89.8125 427.922 89.4375C427.172 88.9688 426.609 88.6406 426.234 88.4531Z" fill="#D6D6D6"/>
            </mask>

            <g id="designerMaskComplete" mask="url(#mask0)">
                <path className="designerMask" fillRule="evenodd" clipRule="evenodd" d="M464.581 38.7581L491.764 30.1501L487.236 15.8499L457.611 25.231C455.56 25.8806 453.831 27.284 452.774 29.1582L442.995 46.4948L443.892 41.2693L429.108 38.7307L421.624 82.3159C419.999 91.7784 432.854 96.2562 437.46 87.8316L455.057 55.6414L464.581 38.7581Z" stroke="black" strokeWidth="28" strokeLinejoin="round"/>
                <path className="designerMask" fillRule="evenodd" clipRule="evenodd" d="M409.12 37.7638L391.465 46.9998L388.838 50.0769L408.674 41.0724L409.12 37.7638ZM372.89 71.5936L415.307 52.3381C418.598 50.8441 420.889 47.7625 421.372 44.1806L422.649 34.7118C423.788 26.268 414.926 20.0552 407.377 24.0045L385.01 35.705C383.821 36.327 382.762 37.1712 381.891 38.1919L359.994 63.8449C358.534 65.5559 358.062 67.9006 358.746 70.0435L362.863 82.9252C364.097 86.7868 367.444 89.5929 371.461 90.1348L390.497 92.702C392.021 92.9076 393.572 92.7758 395.04 92.316L426.838 82.3538L422.952 69.9483L391.684 79.7444L374.765 77.4626L372.89 71.5936Z" stroke="black" strokeWidth="26" strokeLinejoin="round"/>
                <path className="designerMask" fillRule="evenodd" clipRule="evenodd" d="M345 41.9526L338.364 44.6852L319.958 57.4274L291.992 84.5331C285.552 90.7749 275.293 83.3185 279.241 75.2662L302.215 28.4179L314.785 34.5821L306.969 50.5198L310.569 47.0308C310.884 46.7258 311.223 46.4472 311.583 46.1978L330.927 32.8061C331.399 32.4795 331.904 32.2046 332.435 31.9862L347.954 25.5958C353.219 23.4277 359 27.2989 359 32.9932V51.76C359 53.0222 358.701 54.2666 358.128 55.3914L345.5 80.1803V93H331.5V78.74C331.5 77.4778 331.799 76.2334 332.372 75.1086L345 50.3197V41.9526Z" stroke="black" strokeWidth="24" strokeLinejoin="round"/>
                <path className="designerMask" fillRule="evenodd" clipRule="evenodd" d="M269.943 18.4089C272.284 19.2156 274.077 21.1263 274.732 23.5146L281.415 47.858C282.01 50.0272 281.957 52.3235 281.26 54.4624L274.632 74.8219C274.61 74.8891 274.587 74.956 274.563 75.0225L264.833 102.267C264.321 103.701 263.529 105.019 262.504 106.144L243.256 127.27C241.914 128.742 240.214 129.841 238.32 130.458L219.433 136.617C214.234 138.312 208.559 136.111 205.863 131.353L190.475 104.198L203.525 96.8024L217.503 121.469L232.791 116.484L250.943 96.5608L259.462 72.7081C259.153 72.8447 258.838 72.9682 258.517 73.0779L244.716 77.7904C237.254 80.3383 229.5 74.7921 229.5 66.9074V58.1813C229.5 55.9645 230.141 53.795 231.345 51.9339L241.311 36.5317C242.057 35.3793 243.003 34.3698 244.104 33.5508L263.025 19.4815C265.012 18.0037 267.601 17.6023 269.943 18.4089ZM259.068 41.1158L253.561 45.2108L244.5 59.2149V62.0138L252.439 59.3029L258.619 48.7612L259.068 41.1158Z" stroke="black" strokeWidth="26" strokeLinejoin="round"/>
                <path className="designerMask" fillRule="evenodd" clipRule="evenodd" d="M190.499 88.1037L212.499 37.6037L223.501 42.3963L201.501 92.8963L190.499 88.1037Z" stroke="black" strokeWidth="22"/>
                <path className="designerMask" fillRule="evenodd" clipRule="evenodd" d="M215.218 18.9031L214.441 18.3303L221.559 8.66966L226.795 12.5273C232.224 16.5283 230.199 24.6904 224.258 26.2421L219.757 30.7426L216.729 27.7144C214.176 25.1617 213.906 21.6603 215.218 18.9031Z" stroke="black" strokeWidth="22"/>
                <path className="designerMask" fillRule="evenodd" clipRule="evenodd" d="M144.632 37.1544L184.654 15.579L190.823 27.0222L160.618 43.3055L173.55 46.9215C174.352 47.1457 175.117 47.4866 175.82 47.9331L187.346 55.256C192.326 58.4202 192.646 65.5716 187.969 69.1685L175.442 78.8021C175.08 79.0805 174.696 79.3293 174.294 79.5461L144.846 95.421L138.677 83.9778L167.805 68.2753L174.949 62.7816L169.41 59.2623L146.377 52.8224C139.011 50.763 137.9 40.7836 144.632 37.1544Z" stroke="black" strokeWidth="22"/>
                <path className="designerMask" fillRule="evenodd" clipRule="evenodd" d="M122 35.4478L105.247 47.1148L102.944 50.6311L122 38.8729V35.4478ZM89.9022 73.9534L130.014 49.2038C133.113 47.2915 135 43.9097 135 40.2679V30.6602C135 22.1769 125.461 17.1957 118.499 22.0438L97.4208 36.7235C96.3189 37.4909 95.3745 38.4624 94.6386 39.5856L74.0476 71.014L81.5549 86.5649C83.3068 90.1938 86.981 92.5 91.0107 92.5H110.624C112.139 92.5 113.637 92.1718 115.014 91.538L145.718 77.4045L140.282 65.5955L110.076 79.5H92.5799L89.9022 73.9534Z" stroke="black" strokeWidth="26"/>
                <path className="designerMask" fillRule="evenodd" clipRule="evenodd" d="M78.836 -4.62694C82.7072 -3.35808 84.8576 0.769013 83.6796 4.66883L69.1796 52.6688C68.7717 54.0189 67.9915 55.2265 66.9285 56.1533L64.8203 57.9912L64.8108 58.0182C62.8253 63.6293 63.3264 69.8208 66.1883 75.0395C67.351 77.1597 68.8727 79.062 70.6858 80.6618L75.4622 84.8762L65.5378 96.1238L60.7615 91.9094C57.6471 89.1614 55.0332 85.8938 53.0361 82.252C51.19 78.8856 49.9158 75.2836 49.2249 71.5872L47.4285 73.1533C47.2544 73.3051 47.0734 73.4487 46.886 73.5838L28.5538 86.8C25.2172 89.2055 21.2081 90.5 17.0948 90.5H16.0986C5.82686 90.5 -2.5 82.1731 -2.5 71.9014C-2.5 67.1637 -0.691956 62.6046 2.55509 59.1546L10.6461 50.558C14.5619 46.3974 19.2721 43.064 24.4982 40.7547C34.3516 36.4009 45.4186 35.9529 55.4981 39.3697L69.4296 -0.00184202C70.7885 -3.84237 74.9647 -5.8958 78.836 -4.62694ZM47.9461 52.8022C42.1758 51.4864 36.0754 52.0383 30.5607 54.475C27.1683 55.974 24.1109 58.1377 21.5691 60.8385L13.4781 69.4351C12.8498 70.1026 12.5 70.9848 12.5 71.9014C12.5 73.8889 14.1111 75.5 16.0986 75.5H17.0948C18.0593 75.5 18.9994 75.1965 19.7818 74.6324L37.8328 61.6189L47.9461 52.8022Z" stroke="black" strokeWidth="36" strokeLinejoin="round"/>
            </g>

        </svg>

    );

export default designerSvg;