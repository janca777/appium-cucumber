describe( 'Sample test', () => {

    before( () => {
        let myContexts: string[] = driver.getContexts();
        for (let index: number = 0; index < myContexts.length; ++index) {
            let currentContext: string = myContexts[index].toString();
            if (!currentContext.localeCompare( "NATIVE_APP" )) {
                console.log( "<<<Switching context now: " + myContexts[index + 1] + ">>>" );
            }
            driver.switchContext( myContexts[index] );
        }
    } );

    after( () => {
        if (driver != null) {
            driver.closeApp();
            driver.reset();
        }
    } );

    it( "should start on the device and log in when provided valid credentials", () => {

        const btnLogin: WebdriverIO.Element = $( "div.th_ActionButton--primary" );
        btnLogin.click();

        const txtUsername: WebdriverIO.Element = $( "//*[@id='userName']" );
        txtUsername.setValue( "jan.carstensen@buchner.de" );


        const txtPassword: WebdriverIO.Element = $( "//*[@name='password']" );
        txtPassword.setValue( "Test123/" );

        const btnEnter: WebdriverIO.Element = $( "//*[@id='login']" );
        btnEnter.click();

        const btnDenyFingerprintLogin: WebdriverIO.Element = $( "(//span[contains(@class, 'th_TabBar-tabContent')])[1]" );
        btnDenyFingerprintLogin.waitForClickable();
        btnDenyFingerprintLogin.click();

    } );

    it( "should navigate to settings menu and toggle both switches", () => {
        const btnBurgerMenu: WebdriverIO.Element = $( "span#navbutton" );
        btnBurgerMenu.click();

        const btnEinstellungen: WebdriverIO.Element = $( "th-list-item#configuration button.th_ripple" );
        btnEinstellungen.click();

        const toggleFreieZeitenAnzeigen: WebdriverIO.Element = $( "(//span[@class='th_InputSwitch-switch']//div[@class='switch'])[1]" );
        toggleFreieZeitenAnzeigen.click();

        const btnChangePassword: WebdriverIO.Element = $( "//div[@class='th_InputSwitch']//bicon[@biconname='chevron_right']" );
        btnChangePassword.click();
        driver.pause( 3800 );

        const btnClosePasswordScreen: WebdriverIO.Element = $( "span.th_AppBar-leftButton" );
        btnClosePasswordScreen.click();

        toggleFreieZeitenAnzeigen.click();
    } );

    it( "should logout using the burgermenu", () => {
        const btnBurgerMenu: WebdriverIO.Element = $( "span#navbutton" );
        btnBurgerMenu.click();

        // const btnAbmelden: WebdriverIO.Element = $("bicon i.bicon-logout");
        const btnAbmelden: WebdriverIO.Element = $( "th-list-item#logout button.th_ripple" );
        btnAbmelden.click();

    } );

} );
