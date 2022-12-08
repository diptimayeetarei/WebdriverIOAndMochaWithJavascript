const failedAttachment = function (test, errorMessage) {
    let attach = {
        color: '#dc3545',
        author_name: `${test.title
            .replace(' @Smoke', '')
            .replace(' @Regression', '')
            .replace(` @Prod`, ``)}`,
        footer: `Uh! Oh! FAILED\n${errorMessage}`,
        footer_icon: 'https://www.pinclipart.com/picdir/big/31-316209_circle-x-clipart-reject-icon-png-download.png',
        ts: Date.now(),
        callback_id: 'failed_tests',
        actions: [
            {
                name: 'defect_type',
                type: 'button',
                emoji: true,
                text: 'Product Bug',
                style: 'danger',
                value: 'product_bug'
            },
            {
                type: 'button',
                name: 'defect_type',
                emoji: true,
                text: 'Automation Bug',
                style: 'danger',
                value: 'auto_bug'
            },
            {
                type: 'button',
                name: 'defect_type',
                emoji: true,
                text: 'Ignore',
                style: 'primary',
                value: 'ignore',
                confirm: {
                    title: 'Are you sure?',
                    text: 'Would you like to ignore the result?',
                    ok_text: 'Yes',
                    dismiss_text: 'No'
                }
            }
        ]
    };

    return attach;
};
const passedAttachment = function (test) {
    let attach = {
        color: '#6bc77c',
        author_name: `${test.title.replace(' @Smoke', '').replace(' @Regression', '')}`,
        footer: `Woo! Ooh! PASSED`,
        footer_icon: 'https://vectorified.com/images/icon-pass-19.png'
    };

    return attach;
};

module.exports = { failedAttachment, passedAttachment };
