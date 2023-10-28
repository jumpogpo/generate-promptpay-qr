import generatePayload from 'promptpay-qr'
import minimist from 'minimist';
import QRCode from 'qrcode'

const args: any = minimist(process.argv.slice(2), { string: '_' });

if (args._[0] == undefined || args._[1] == undefined) {
    console.log("Please input phoneNumber and amount\nExample: node index.js 0123456789 100");
} else {
    const qrCode: [boolean, string] = generate_qr_code(args._[0], Number(args._[1]));

    if (qrCode[0] != true) {
        console.log(qrCode[1]);
    } else {
        QRCode.toString(qrCode[1], { type: 'terminal', errorCorrectionLevel: 'L' }, (e: Error | undefined | null, s: string | null) => {
            if (e) throw e
            console.log("\n" + s)
        })
    }    
}

function check_valid_phoneNumber(phoneNumber: string): boolean {
    return /^(0|66)\d{9}|\d{13}$/.test(String(phoneNumber)) ? true : false;
}

function generate_qr_code(phoneNumber: string, amount: number): [boolean, string] {
    const valid_phoneNumber: boolean = check_valid_phoneNumber(phoneNumber);
    
    if (!valid_phoneNumber) return [false, "Invalid recipient given: expected phone number"];
    
    const qrCode: string = generatePayload(phoneNumber, { amount: amount });
    return [true, qrCode];
}