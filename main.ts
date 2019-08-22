/*
Riven
modified from pxt-servo/servodriver.ts
load dependency
"HaodaBit": "file:../pxt-HaodaBit"
*/
/**
//% groups='["传感器", "显示", "执行","红外","音乐"]'
*/
//% weight=10 color=#006000 icon="\uf0a4" block="HaodaBit"

namespace HaodaBit {
    const MM32_ADDRESS = 0x40
    const MODE1 = 0x00
    const MODE2 = 0x01
    const SUBADR1 = 0x02
    const SUBADR2 = 0x03
    const SUBADR3 = 0x04
    const PRESCALE = 0xFE
    const LED0_ON_L = 0x06
    const LED0_ON_H = 0x07
    const LED0_OFF_L = 0x08
    const LED0_OFF_H = 0x09
    const ALL_LED_ON_L = 0xFA
    const ALL_LED_ON_H = 0xFB
    const ALL_LED_OFF_L = 0xFC
    const ALL_LED_OFF_H = 0xFD

    const STP_CHA_L = 2047
    const STP_CHA_H = 4095

    const STP_CHB_L = 1
    const STP_CHB_H = 2047

    const STP_CHC_L = 1023
    const STP_CHC_H = 3071

    const STP_CHD_L = 3071
    const STP_CHD_H = 1023


    const BYG_CHA_L = 3071
    const BYG_CHA_H = 1023

    const BYG_CHB_L = 1023
    const BYG_CHB_H = 3071

    const BYG_CHC_L = 4095
    const BYG_CHC_H = 2047

    const BYG_CHD_L = 2047
    const BYG_CHD_H = 4095


    const TCS34725IntegrationTime = 0xEB
    const TCS34725Gain = 0x01
    const TCS34725_COMMAND_BIT = 0x80
    const TCS34725_ADDRESS = 0x29

    const N76E003AT20_ADDRESS = 0x52
    const N76E003AT20_DATA1 = 0x16
    const N76E003AT20_DATA2 = 0x08

    // Auto-generated. Do not edit.



    const PortDigital = [
        DigitalPin.P0,
        DigitalPin.P1,
        DigitalPin.P2,
        DigitalPin.P8,
        DigitalPin.P12,
        DigitalPin.P16

    ]


    const PortAnalog = [
        AnalogPin.P0,
        AnalogPin.P1,
        AnalogPin.P2,
        AnalogPin.P8,
        AnalogPin.P12,
        AnalogPin.P16
    ]

    const PortSerial = [
        SerialPin.P0,
        SerialPin.P1,
        SerialPin.P2,
        SerialPin.P8,
        SerialPin.P12,
        SerialPin.P16
    ]


    export enum Ports {
        P0 = 0,
        P1 = 1,
        P2 = 2,
        P8 = 3,
        P12 = 4,
        P16 = 5

    }


    export enum Ports1 {
        P0 = 0,
        P1 = 1,
        P2 = 2


    }




    export enum linechoose {
        //% block=R1
        R1 = 0x19,
        //% block=R2
        R2 = 0x16,
        //% block=L1
        L1 = 0x14,
        //% block=L2
        L2 = 0x13
    }

    export enum linechooseAD {
        //% block=R1
        R1 = 0x07,
        //% block=R2
        R2 = 0x09,
        //% block=L1
        L1 = 0x05,
        //% block=L2
        L2 = 0x03
    }

    export enum linechoosedb {
        //% block=R1
        R1 = 0x0f,
        //% block=R2
        R2 = 0x11,
        //% block=L1
        L1 = 0x0d,
        //% block=L2
        L2 = 0x0b
    }

    export enum PrevNext {
        //% block=play
        play = 0x0d,
        //% block=stop
        stop = 0x0e,
        //% block=next
        next = 0x02,
        //% block=prev
        prev = 0x01
    }

    export enum Creadcolor {
        //% block=red
        RR = 0,
        //% block=green
        GG = 1,
        //% block=blue
        BB = 2
    }
	
	export enum NeoPixelColors {
    //% block=red
    Red = 0xFF0000,
    //% block=orange
    Orange = 0xFFA500,
    //% block=yellow
    Yellow = 0xFFFF00,
    //% block=green
    Green = 0x00FF00,
    //% block=blue
    Blue = 0x0000FF,
    //% block=indigo
    Indigo = 0x4b0082,
    //% block=violet
    Violet = 0x8a2be2,
    //% block=purple
    Purple = 0xFF00FF,
    //% block=white
    White = 0xFFFFFF,
    //% block=black
    Black = 0x000000
}

    export enum encodingType {
        NEC
    }

    export enum BMP280_I2C_ADDRESS {
        //% block="0x76"
        ADDR_0x76 = 0x76,
        //% block="0x77"
        ADDR_0x77 = 0x77
    }

    export enum Motors {
        //%blockId=HaodaBit_motordriver_motor_one
        //% block="MA"
        MA = 0x1,
        //%blockId=HaodaBit_motordriver_motor_two
        //% block="MB"
        MB = 0x2
    }

    export enum Dir {
        //% blockId="CW" block="CW"
        CW = 1,
        //% blockId="CCW" block="CCW"
        CCW = -1,
    }

    export enum Buttondd {
        //% block=0
        IR_BUTTON_0 = 0x4f,
        //% block=1
        IR_BUTTON_1 = 0xff,
        //% block=2
        IR_BUTTON_2 = 0x7f,
        //% block=3
        IR_BUTTON_3 = 0xbf,
        //% block=4
        IR_BUTTON_4 = 0xdf,
        //% block=5
        IR_BUTTON_5 = 0x5f,
        //% block=6
        IR_BUTTON_6 = 0x9f,
        //% block=7
        IR_BUTTON_7 = 0xef,
        //% block=8
        IR_BUTTON_8 = 0x6f,
        //% block=9
        IR_BUTTON_9 = 0xaf,
        //% block=OK
        IR_BUTTON_OK = 0x57,
        //% block=UP
        IR_BUTTON_UP = 0x77,
        //% block=DOWM
        IR_BUTTON_DOWN = 0x67,
        //% block=LEFT
        IR_BUTTON_LEFT = 0xd7,
        //% block=RIGHT
        IR_BUTTON_RIGHT = 0x97,
        //% block=*
        IR_BUTTON_SPARK = 0xcf,
        //% block=#
        IR_BUTTON_POUND = 0x8f

    }
    let distanceBuf = 0;
    let alreadyInit = 0;
    let dht11Temp = -1;
    let dht11Humi = -1;
    let tcs34725Initialised = false
    let tempHandler: Action;
    let send_init = false;
    let rec_init = false;
    let arr: number[] = []
    let received = false
    let first = true
    let rec_Type = ""
    let messageStr = ""
    let command1 = 0
    let recPin = DigitalPin.P8
    let thereIsHandler = false
    arr = []
    let irLed = AnalogPin.P16;
    let pwmPeriod = 26;
    pins.analogWritePin(irLed, 0);
    pins.analogSetPeriod(irLed, pwmPeriod);
    let BMP280_I2C_ADDR = BMP280_I2C_ADDRESS.ADDR_0x76;
    let initialized = false



    function i2cWrite(addr: number, reg: number, value: number) {
        let buf = pins.createBuffer(2)
        buf[0] = reg
        buf[1] = value
        pins.i2cWriteBuffer(addr, buf)
    }

    function i2cCmd(addr: number, value: number) {
        let buf = pins.createBuffer(1)
        buf[0] = value
        pins.i2cWriteBuffer(addr, buf)
    }

    function i2cRead(addr: number, reg: number) {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
        return val;
    }




    //% blockId=HaodaBit_ultrasonic block="Ultrasonic|port %pin"
    //% weight=10
    //% group="传感器" blockGap=8
    export function Ultrasonic(pin: Ports): number {

        // send pulse
        let port = PortDigital[pin]

        pins.setPull(port, PinPullMode.PullNone);
        pins.digitalWritePin(port, 0);
        control.waitMicros(2);
        pins.digitalWritePin(port, 1);
        control.waitMicros(10);
        pins.digitalWritePin(port, 0);

        // read pulse
        let d = pins.pulseIn(port, PulseValue.High, 23000);
        let ret = d;
        // filter timeout spikes
        if (ret == 0 && distanceBuf != 0) {
            ret = distanceBuf;
        }
        distanceBuf = d;

        return Math.floor(ret * 10 / 6 / 58);
    }


    /**
  *  set the IR receiver pin.
  */
    //% blockId=setREC_pin block="set IR receiver pin: %myPin" 
    //% weight=85 
    //% group="红外" blockGap=8
    export function setREC_pin(myPin: Ports) {
        let portaa = PortDigital[myPin]
        recPin = portaa;
        pins.setEvents(recPin, PinEventType.Pulse)
        pins.setPull(recPin, PinPullMode.PullUp)
        pins.onPulsed(recPin, PulseValue.Low, function () {
            arr.push(input.runningTimeMicros())
        })
        pins.onPulsed(recPin, PulseValue.High, function () {
            arr.push(input.runningTimeMicros())
        })
        control.onEvent(recPin, DAL.MICROBIT_PIN_EVENT_ON_TOUCH, tempHandler);
        rec_init = true;
    }

    function resetReceiver() {
        arr = []
        received = false
    }

    control.inBackground(function () {
        basic.forever(function () {
            if ((!received) && (rec_init)) {
                if (arr.length > 20) {
                    if ((input.runningTimeMicros() - arr[arr.length - 1]) > 120000) {
                        if (first) {
                            resetReceiver()
                            first = false
                        } else {
                            received = true
                            decodeIR();
                        }
                    }
                }
            }
        })
    })

    function decodeIR() {
        let addr = 0
        let command = 0
        messageStr = ""
        rec_Type = ""
        for (let i = 0; i <= arr.length - 1 - 1; i++) {
            arr[i] = arr[i + 1] - arr[i]
        }
        if (((arr[0] + arr[1]) > 13000) && ((arr[0] + arr[1]) < 14000)) {
            rec_Type = "NEC"
            arr.removeAt(1)
            arr.removeAt(0)
            addr = pulseToDigit(0, 15, 1600)
            command = pulseToDigit(16, 31, 1600)
            command1 = command & 0x00ff

            arr = [];
            if (thereIsHandler) {
                tempHandler();
            }
        } else if (((arr[0] + arr[1]) > 2600) && ((arr[0] + arr[1]) < 3200)) {
            rec_Type = "SONY"
            arr.removeAt(1)
            arr.removeAt(0)
            command = pulseToDigit(0, 11, 1300)
            command1 = command & 0x00ff
            arr = [];
            if (thereIsHandler) {
                tempHandler();
            }
        }
        resetReceiver();
    }

    function pulseToDigit(beginBit: number, endBit: number, duration: number): number {
        let myNum = 0
        for (let i = beginBit; i <= endBit; i++) {
            myNum <<= 1
            if ((arr[i * 2] + arr[i * 2 + 1]) < duration) {
                myNum += 0
            } else {
                myNum += 1
            }
        }
        return myNum
    }


    /**
     * Do something when a receive IR
     */
    //% blockId=onReceivedIR block="on IR message received" blockInlineInputs=true
    //% weight=70 
    //% group="红外" blockGap=8
    export function onReceivedIR(handler: Action): void {
        tempHandler = handler
        thereIsHandler = true
    }


    /**
     * return the message of the received IR 
     */
    //% blockId=getMessage block="read IR"
    //% weight=60 
    //% group="红外" blockGap=8
    export function getMessage(): number {

        return command1
    }


    //% blockId=IR_KEY block="IR buttons| %readkey"
    //% weight=100
    //% group="红外" blockGap=8
    export function key_read(readkey: Buttondd): number {
        return readkey;
    }


    //% blockId=HaodaBit_mp3_connect block="MP3 init|port %port"
    //% weight=39
    //% group="音乐" blockGap=8

    export function MP3Connect(port: Ports): void {
        let pin = PortSerial[port]
        // todo: fiber may freeze on steam reading
        serial.redirect(pin, SerialPin.P16, BaudRate.BaudRate9600)
    }

    //% blockId=HaodaBit_mp3_play block="MP3 |%pn"
    //% weight=39
    //% group="音乐" blockGap=8
    export function MP3Play(pn: PrevNext): void {
        let buf = pins.createBuffer(8);
        buf[0] = 0x7e;
        buf[1] = 0xFF;
        buf[2] = 0X06;
        buf[3] = pn;
        buf[4] = 0x00;
        buf[5] = 0x00;
        buf[6] = 0x00;
        buf[7] = 0xef;
        serial.writeBuffer(buf)
    }

    //% blockId=HaodaBit_mp3_volumn block="MP3_volume_set|%volumn"
    //% volumn.min=0 volumn.max=30
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    //% weight=39
    //% group="音乐" blockGap=8
    export function MP3Volumn(volumn: number): void {
        let buf = pins.createBuffer(8);
        buf[0] = 0x7e;
        buf[1] = 0xff;
        buf[2] = 0x06;
        buf[3] = 0x06;
        buf[4] = 0x00;
        buf[5] = 0x00;
        buf[6] = volumn;
        buf[7] = 0xef;
        serial.writeBuffer(buf)
    }

    //% blockId=HaodaBit_mp3_playindex block="MP3 play|index %index"
    //% weight=39
    //% group="音乐" blockGap=8
    export function MP3PlayIndex(index: number): void {
        let buf = pins.createBuffer(8);
        if (index == 0) {
            index = 1;
        }
        buf[0] = 0x7e;
        buf[1] = 0xff;
        buf[2] = 0x06;
        buf[3] = 0x12;
        buf[4] = 0x00;
        buf[5] = 0x00;
        buf[6] = index;
        buf[7] = 0xef;
        serial.writeBuffer(buf)
    }


    //% blockId=HaodaBit_motor_servo block="Servo|%pin|degree|%degree"
    //% weight=100 blockGap=8
    //% degree.min=0 degree.max=180
    //% group="执行" name.fieldEditor="gridpicker" name.fieldOptions.columns=4

    export function servo(pin: Ports, degree: number): void {

        let port = PortAnalog[pin]

        let value = (0.5 + degree / 90) * 1000
        pins.servoSetPulse(port, value)
    }

    //% blockId=HaodaBit_LM35_server block="read lm35|port %pin"
    //% weight=100
    //% group="传感器" blockGap=8
    export function server_lm35(pin: Ports1): number {

        let port = PortAnalog[pin]
        let vas = pins.analogReadPin(port)
        let value = (82.5 * vas) >> 8
        return value;
    }


    function TCS34725_setIntegrationTime() {
        if (!tcs34725Initialised) { TCS34725_begin(); }

        /* Update the timing register */
        i2cWrite(TCS34725_ADDRESS, TCS34725_COMMAND_BIT | 0x01, TCS34725IntegrationTime & 0xFF);

    }


    function TCS34725_setGain() {
        if (!tcs34725Initialised) { TCS34725_begin(); }

        /* Update the timing register */
        i2cWrite(TCS34725_ADDRESS, TCS34725_COMMAND_BIT | 0x0F, TCS34725Gain & 0xFF);

    }
    function TCS34725_enable(): void {

        i2cWrite(TCS34725_ADDRESS, TCS34725_COMMAND_BIT | 0x00, 0x01 & 0xFF);
        basic.pause(3);
        i2cWrite(TCS34725_ADDRESS, TCS34725_COMMAND_BIT | 0x00, (0x01 | 0x02) & 0xFF);
    }
    function TCS34725_begin(): boolean {

        //i2cWrite(TCS34725_ADDRESS, 0x00, 0x00 & 0xFF);

        /* Make sure we're actually connected */
        let x = i2cRead(TCS34725_ADDRESS, TCS34725_COMMAND_BIT | 0x12);

        if ((x != 0x44) && (x != 0x10)) {
            return false;
        }
        tcs34725Initialised = true;

        /* Set default integration time and gain */
        TCS34725_setIntegrationTime();
        TCS34725_setGain();

        /* Note: by default, the device is in power down mode on bootup */
        TCS34725_enable();

        return true;
    }



    function TCS34725_LOCK(): void {
        let r = i2cRead(TCS34725_ADDRESS, TCS34725_COMMAND_BIT | 0x00);
        r |= 0x10;
        i2cWrite(TCS34725_ADDRESS, TCS34725_COMMAND_BIT | 0x00, r & 0xFF);
    }

    function TCS34725_readRGBC(a: number): number {

        if (!tcs34725Initialised) { TCS34725_begin(); }

        let clear = i2cRead(TCS34725_ADDRESS, TCS34725_COMMAND_BIT | 0x14);
        let red = i2cRead(TCS34725_ADDRESS, TCS34725_COMMAND_BIT | 0x16);
        let green = i2cRead(TCS34725_ADDRESS, TCS34725_COMMAND_BIT | 0x18);
        let blue = i2cRead(TCS34725_ADDRESS, TCS34725_COMMAND_BIT | 0x1A);
        basic.pause(50);
        TCS34725_LOCK();
        let sum = clear;
        let r = red;
        r /= sum;
        let g = green;
        g /= sum;
        let b = blue;
        b /= sum;
        r *= 256;
        g *= 256;
        b *= 256;
        if (a == 0) {
            return Math.round(r);
        } else if (a == 1) {
            return Math.round(g);
        } else if (a == 2) {
            return Math.round(b);
        } else {
            return 0;
        }
    }



    //% blockId=HaodaBit_TCS34725 block="read color|port %pn"
    //% weight=100
    //% group="传感器" blockGap=8
    export function H_TCS34725(pn: Creadcolor): number {
        let num = TCS34725_readRGBC(pn);
        return num;
    }


    function transmitBit(highTime: number, lowTime: number): void {
        pins.analogWritePin(irLed, 512);
        control.waitMicros(highTime);
        pins.analogWritePin(irLed, 0);
        control.waitMicros(lowTime);
    }



    function encode(myCode: number, bits: number, trueHigh: number, trueLow: number, falseHigh: number, falseLow: number): void {
        const MESSAGE_BITS = bits;
        for (let mask = 1 << (MESSAGE_BITS - 1); mask > 0; mask >>= 1) {
            if (myCode & mask) {
                transmitBit(trueHigh, trueLow);
            } else {
                transmitBit(falseHigh, falseLow);
            }
        }
    }

    function sendNEC(message: number, times: number): void {
        const enum NEC {
            startHigh = 9000,
            startLow = 4500,
            stopHigh = 560,
            stopLow = 0,
            trueHigh = 560,
            trueLow = 1690,
            falseHigh = 560,
            falseLow = 560,
            interval = 110000
        }
        let address = message >> 16;
        let command = message % 0x010000;
        const MESSAGE_BITS = 16;
        let startTime = 0;
        let betweenTime = 0;
        for (let sendCount = 0; sendCount < times; sendCount++) {
            startTime = input.runningTimeMicros();
            transmitBit(NEC.startHigh, NEC.startLow);
            encode(address, 16, NEC.trueHigh, NEC.trueLow, NEC.falseHigh, NEC.falseLow);
            encode(command, 16, NEC.trueHigh, NEC.trueLow, NEC.falseHigh, NEC.falseLow);
            transmitBit(NEC.stopHigh, NEC.stopLow);
            betweenTime = input.runningTimeMicros() - startTime
            if (times > 0)
                control.waitMicros(NEC.interval - betweenTime);
        }
    }



    export function sendMessage(message: number, times: number, myType: encodingType): void {
        switch (myType) {
            case encodingType.NEC: sendNEC(message, times);
            default: sendNEC(message, times);
        }
    }

    /**
     *  set the infrared LED pin.
     */
    //% blockId=setIR_pin block="set IR LED pin: %port" 
    //% weight=90 
    //% group="红外" blockGap=8

    export function setIR_pin(port: Ports) {
        let portss = PortAnalog[port]
        irLed = portss;
        pins.analogWritePin(irLed, 0);
        pins.analogSetPeriod(irLed, pwmPeriod);
        send_init = true;
    }

    /**
    * send message from IR LED. You must set the message encoding type, send how many times, and the message.
    */
    //% blockId=HaodaBit_sendMyMessage block="IR send message at: %msg"
    //% weight=100
    //% group="红外" blockGap=8
    export function sendMyMessage(msg: number): void {
        if (send_init) {
            //control.inBackground(() => {
            sendMessage(msg, 1, encodingType.NEC);
            //})
        }
    }


    function setreg(reg: number, dat: number): void {
        let buf = pins.createBuffer(2);
        buf[0] = reg;
        buf[1] = dat;
        pins.i2cWriteBuffer(BMP280_I2C_ADDR, buf);
    }

    function getreg(reg: number): number {
        pins.i2cWriteNumber(BMP280_I2C_ADDR, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(BMP280_I2C_ADDR, NumberFormat.UInt8BE);
    }

    function getUInt16LE(reg: number): number {
        pins.i2cWriteNumber(BMP280_I2C_ADDR, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(BMP280_I2C_ADDR, NumberFormat.UInt16LE);
    }

    function getInt16LE(reg: number): number {
        pins.i2cWriteNumber(BMP280_I2C_ADDR, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(BMP280_I2C_ADDR, NumberFormat.Int16LE);
    }

    let dig_T1 = getUInt16LE(0x88)
    let dig_T2 = getInt16LE(0x8A)
    let dig_T3 = getInt16LE(0x8C)
    let dig_P1 = getUInt16LE(0x8E)
    let dig_P2 = getInt16LE(0x90)
    let dig_P3 = getInt16LE(0x92)
    let dig_P4 = getInt16LE(0x94)
    let dig_P5 = getInt16LE(0x96)
    let dig_P6 = getInt16LE(0x98)
    let dig_P7 = getInt16LE(0x9A)
    let dig_P8 = getInt16LE(0x9C)
    let dig_P9 = getInt16LE(0x9E)
    setreg(0xF4, 0x2F)
    setreg(0xF5, 0x0C)
    let T = 0
    let P = 0

    function get(): void {
        let adc_T = (getreg(0xFA) << 12) + (getreg(0xFB) << 4) + (getreg(0xFC) >> 4)
        let var1 = (((adc_T >> 3) - (dig_T1 << 1)) * dig_T2) >> 11
        let var2 = (((((adc_T >> 4) - dig_T1) * ((adc_T >> 4) - dig_T1)) >> 12) * dig_T3) >> 14
        let t = var1 + var2
        T = Math.idiv(((t * 5 + 128) >> 8), 100)
        var1 = (t >> 1) - 64000
        var2 = (((var1 >> 2) * (var1 >> 2)) >> 11) * dig_P6
        var2 = var2 + ((var1 * dig_P5) << 1)
        var2 = (var2 >> 2) + (dig_P4 << 16)
        var1 = (((dig_P3 * ((var1 >> 2) * (var1 >> 2)) >> 13) >> 3) + (((dig_P2) * var1) >> 1)) >> 18
        var1 = ((32768 + var1) * dig_P1) >> 15
        if (var1 == 0)
            return; // avoid exception caused by division by zero
        let adc_P = (getreg(0xF7) << 12) + (getreg(0xF8) << 4) + (getreg(0xF9) >> 4)
        let _p = ((1048576 - adc_P) - (var2 >> 12)) * 3125
        _p = Math.idiv(_p, var1) * 2;
        var1 = (dig_P9 * (((_p >> 3) * (_p >> 3)) >> 13)) >> 12
        var2 = (((_p >> 2)) * dig_P8) >> 13
        P = _p + ((var1 + var2 + dig_P7) >> 4)
    }

    /**
     * get pressure
     */
    //% blockId="BMP280_GET_PRESSURE" block="BMP280 get pressure"
    //% weight=80
    //% group="传感器" blockGap=8
    export function pressure(): number {
        get();
        return P;
    }

    /**
     * get temperature
    */
    //% blockId="BMP280_GET_TEMPERATURE" block="BMP280 get temperature"
    //% weight=80
    //% group="传感器" blockGap=8
    export function temperature(): number {
        get();
        return T;
    }

    /**
     * power on
    */
    //% blockId="BMP280_POWER_ON" block="BMP280 power On"
    //% weight=80 
    //% group="传感器" blockGap=8
    export function PowerOn() {
        setreg(0xF4, 0x2F)
    }

    /**
     * power off
     */
    //% blockId="BMP280_POWER_OFF" block="BMP280 power Off"
    //% weight=80 
    //% group="传感器" blockGap=8
    export function PowerOff() {
        setreg(0xF4, 0)
    }

    /**
     * set I2C address
     */
    //% blockId="BMP280_SET_ADDRESS" block="BMP280 set address %addr"
    //% weight=80
    //% group="传感器" blockGap=8
    export function Address(addr: BMP280_I2C_ADDRESS) {
        BMP280_I2C_ADDR = addr
    }


    function MM32DDDD(): void {
        i2cWrite(MM32_ADDRESS, MODE1, 0x00)
        setFreq(50);
        initialized = true
    }



    function setFreq(freq: number): void {
        // Constrain the frequency
        let prescaleval = 25000000;
        prescaleval /= 4096;
        prescaleval /= freq;
        prescaleval -= 1;
        let prescale = prescaleval;//Math.floor(prescaleval + 0.5);
        let oldmode = i2cRead(MM32_ADDRESS, MODE1);
        let newmode = (oldmode & 0x7F) | 0x10; // sleep
        i2cWrite(MM32_ADDRESS, MODE1, newmode); // go to sleep
        i2cWrite(MM32_ADDRESS, PRESCALE, prescale); // set the prescaler
        i2cWrite(MM32_ADDRESS, MODE1, oldmode);
        control.waitMicros(5000);
        i2cWrite(MM32_ADDRESS, MODE1, oldmode | 0xa1);
    }

    function setPwm(channel: number, on: number, off: number): void {
        if (channel < 0 || channel > 15)
            return;

        let buf = pins.createBuffer(5);
        buf[0] = LED0_ON_L + 4 * channel;
        buf[1] = on & 0xff;
        buf[2] = (on >> 8) & 0xff;
        buf[3] = off & 0xff;
        buf[4] = (off >> 8) & 0xff;
        pins.i2cWriteBuffer(MM32_ADDRESS, buf);
    }

    /**
     * Runs the motor at the given speed
     */
    //% weight=90 blockGap=8
    //% blockId=HaodaBit_MotorRun block="Motor|%index|dir|%Dir|speed|%speed"
    //% speed.min=0 speed.max=255
    //% index.fieldEditor="gridpicker" index.fieldOptions.columns=2
    //% direction.fieldEditor="gridpicker" direction.fieldOptions.columns=2
    //% group="执行" name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function MotorRun(index: Motors, direction: Dir, speed: number): void {
        if (!initialized) {
            MM32DDDD()
        }
        speed = speed * 16 * direction; // map 255 to 4096
        if (speed >= 4096) {
            speed = 4095
        }
        if (speed <= -4096) {
            speed = -4095
        }
        if (index > 4 || index <= 0)
            return
        let pn = (4 - index) * 2
        let pp = (4 - index) * 2 + 1
        if (speed >= 0) {
            setPwm(pp, 0, speed)
            setPwm(pn, 0, 0)
        } else {
            setPwm(pp, 0, 0)
            setPwm(pn, 0, -speed)
        }
    }

    //% weight=20 blockGap=8
    //% blockId=HaodaBit_motorStop block="Motor stop|%index"
    //% index.fieldEditor="gridpicker" index.fieldOptions.columns=2 
    //% group="执行" name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function motorStop(index: Motors) {
        setPwm((4 - index) * 2, 0, 0);
        setPwm((4 - index) * 2 + 1, 0, 0);
    }

    /**
    * Stop all motors
    */
    //% weight=10 blockGap=8
    //% blockId=HaodaBit_motorStopAll block="Motor Stop All"
    //% group="执行" name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function motorStopAll(): void {
        for (let idx = 1; idx <= 2; idx++) {
            motorStop(idx);
        }
    }

    //% blockId="HaodaBit_set_height" block="set Tracer|%pn|height|%heights"
    //% weight=90
    //% group="传感器" blockGap=8
    export function Lineheight(pn: linechoosedb, heights: number): void {


        /**	
            	
            	
                i2cWrite_1(N76E003AT20_ADDRESS, 0x03, N76E003AT20_DATA1, N76E003AT20_DATA2);
            	
                i2cWrite_1(N76E003AT20_ADDRESS, 0x05, N76E003AT20_DATA1, N76E003AT20_DATA2);
        
                i2cWrite_1(N76E003AT20_ADDRESS, 0x07, N76E003AT20_DATA1, N76E003AT20_DATA2);
        
                i2cWrite_1(N76E003AT20_ADDRESS, 0x09, N76E003AT20_DATA1, N76E003AT20_DATA2);
        
                i2cWrite_1(N76E003AT20_ADDRESS, 0x13, N76E003AT20_DATA1, N76E003AT20_DATA2);
        
                i2cWrite_1(N76E003AT20_ADDRESS, 0x14, N76E003AT20_DATA1, N76E003AT20_DATA2);
        
                i2cWrite_1(N76E003AT20_ADDRESS, 0x19, N76E003AT20_DATA1, N76E003AT20_DATA2);
        
                i2cWrite_1(N76E003AT20_ADDRESS, 0x16, N76E003AT20_DATA1, N76E003AT20_DATA2);
        */



        i2cWrite(N76E003AT20_ADDRESS, pn, heights);



    }

    //% blockId="HaodaBit_read_linead" block="read Tracer|%li|touch black"
    //% weight=90
    //% group="传感器" blockGap=8
    export function readlinead(li: linechooseAD): number {
        let values = i2cRead(N76E003AT20_ADDRESS, li);
        return values;

    }

    //% blockId="HaodaBit_read_line" block="Tracer|%li|touch black or not"
    //% weight=90
    //% group="传感器" blockGap=8
    export function readline(li: linechoose): number {
        let values = i2cRead(N76E003AT20_ADDRESS, li);
        return values;

    }
	
	 //% shim=sendBufferAsm
    function sendBuffer(buf: Buffer, pin: DigitalPin) {
    }

    /**
     * A NeoPixel strip
     */
    export class Strip {
        buf: Buffer;
        pin: DigitalPin;
        // TODO: encode as bytes instead of 32bit
        brightness: number;
        start: number; // start offset in LED strip
        _length: number; // number of LEDs
        _mode: NeoPixelMode;
        _matrixWidth: number; // number of leds in a matrix - if any
        _matrixChain: number; // the connection type of matrix chain
        _matrixRotation: number; // the rotation type of matrix

        /**
         * Shows all LEDs to a given color (range 0-255 for r, g, b). 
         * @param rgb RGB color of the LED
         */
        //% blockId="neopixel_set_strip_color" block="%strip|show color %rgb=neopixel_colors" 
        //% weight=85 blockGap=8
        //% parts="neopixel"
        showColor(rgb: number) {
            rgb = rgb >> 0;
            this.setAllRGB(rgb);
            this.show();
        }

        /**
         * Shows a rainbow pattern on all LEDs. 
         * @param startHue the start hue value for the rainbow, eg: 1
         * @param endHue the end hue value for the rainbow, eg: 360
         */
        //% blockId="neopixel_set_strip_rainbow" block="%strip|show rainbow from %startHue|to %endHue" 
        //% weight=85 blockGap=8
        //% parts="neopixel"
        showRainbow(startHue: number = 1, endHue: number = 360) {
            if (this._length <= 0) return;

            startHue = startHue >> 0;
            endHue = endHue >> 0;
            const saturation = 100;
            const luminance = 50;
            const steps = this._length;
            const direction = HueInterpolationDirection.Clockwise;

            //hue
            const h1 = startHue;
            const h2 = endHue;
            const hDistCW = ((h2 + 360) - h1) % 360;
            const hStepCW = Math.idiv((hDistCW * 100), steps);
            const hDistCCW = ((h1 + 360) - h2) % 360;
            const hStepCCW = Math.idiv(-(hDistCCW * 100), steps);
            let hStep: number;
            if (direction === HueInterpolationDirection.Clockwise) {
                hStep = hStepCW;
            } else if (direction === HueInterpolationDirection.CounterClockwise) {
                hStep = hStepCCW;
            } else {
                hStep = hDistCW < hDistCCW ? hStepCW : hStepCCW;
            }
            const h1_100 = h1 * 100; //we multiply by 100 so we keep more accurate results while doing interpolation

            //sat
            const s1 = saturation;
            const s2 = saturation;
            const sDist = s2 - s1;
            const sStep = Math.idiv(sDist, steps);
            const s1_100 = s1 * 100;

            //lum
            const l1 = luminance;
            const l2 = luminance;
            const lDist = l2 - l1;
            const lStep = Math.idiv(lDist, steps);
            const l1_100 = l1 * 100

            //interpolate
            if (steps === 1) {
                this.setPixelColor(0, hsl(h1 + hStep, s1 + sStep, l1 + lStep))
            } else {
                this.setPixelColor(0, hsl(startHue, saturation, luminance));
                for (let i = 1; i < steps - 1; i++) {
                    const h = Math.idiv((h1_100 + i * hStep), 100) + 360;
                    const s = Math.idiv((s1_100 + i * sStep), 100);
                    const l = Math.idiv((l1_100 + i * lStep), 100);
                    this.setPixelColor(i, hsl(h, s, l));
                }
                this.setPixelColor(steps - 1, hsl(endHue, saturation, luminance));
            }
            this.show();
        }

        /**
         * Displays a vertical bar graph based on the `value` and `high` value.
         * If `high` is 0, the chart gets adjusted automatically.
         * @param value current value to plot
         * @param high maximum value, eg: 255
         */
        //% weight=84
        //% blockId=neopixel_show_bar_graph block="%strip|show bar graph of %value|up to %high" 
        //% icon="\uf080"
        //% parts="neopixel"
        showBarGraph(value: number, high: number): void {
            if (high <= 0) {
                this.clear();
                this.setPixelColor(0, NeoPixelColors.Yellow);
                this.show();
                return;
            }

            value = Math.abs(value);
            const n = this._length;
            const n1 = n - 1;
            let v = Math.idiv((value * n), high);
            if (v == 0) {
                this.setPixelColor(0, 0x666600);
                for (let i = 1; i < n; ++i)
                    this.setPixelColor(i, 0);
            } else {
                for (let i = 0; i < n; ++i) {
                    if (i <= v) {
                        const b = Math.idiv(i * 255, n1);
                        this.setPixelColor(i, neopixel.rgb(b, 0, 255 - b));
                    }
                    else this.setPixelColor(i, 0);
                }
            }
            this.show();
        }

        /**
         * Set LED to a given color (range 0-255 for r, g, b). 
         * You need to call ``show`` to make the changes visible.
         * @param pixeloffset position of the NeoPixel in the strip
         * @param rgb RGB color of the LED
         */
        //% blockId="neopixel_set_pixel_color" block="%strip|set pixel color at %pixeloffset|to %rgb=neopixel_colors" 
        //% blockGap=8
        //% weight=80
        //% parts="neopixel" advanced=true
        setPixelColor(pixeloffset: number, rgb: number): void {
            this.setPixelRGB(pixeloffset >> 0, rgb >> 0);
        }

        /**
         * Sets the number of pixels in a matrix shaped strip
         * @param width number of pixels in a row
	 * @param rotation type of matrix
	 * @param chain type of matrix
         */
        //% blockId=neopixel_set_matrix_width block="%strip|set matrix width %width|rotation %rotation|chain %chain"
        //% blockGap=8
        //% weight=5
        //% parts="neopixel" advanced=true
        setMatrixWidth(width: number, rotation: number, chain: number) {
            this._matrixWidth = Math.min(this._length, width >> 0);
            this._matrixRotation = rotation >> 0;
            this._matrixChain = chain >> 0;
        }

        /**
         * Set LED to a given color (range 0-255 for r, g, b) in a matrix shaped strip 
         * You need to call ``show`` to make the changes visible.
         * @param x horizontal position
         * @param y horizontal position
         * @param rgb RGB color of the LED
         */
        //% blockId="neopixel_set_matrix_color" block="%strip|set matrix color at x %x|y %y|to %rgb=neopixel_colors" 
        //% weight=4
        //% parts="neopixel" advanced=true
        setMatrixColor(x: number, y: number, rgb: number) {
            if (this._matrixWidth <= 0) return; // not a matrix, ignore
            x = x >> 0;
            y = y >> 0;
            rgb = rgb >> 0;
            const cols = Math.idiv(this._length, this._matrixWidth);

            if (this._matrixRotation == 1) {
                let t = y;
                y = x;
                x = t;
            } else if (this._matrixRotation == 2) {
                x = this._matrixWidth - x - 1;
            }


            // here be the physical mapping
            if (this._matrixChain == 1 && y % 2 == 1) {
                x = this._matrixWidth - x - 1;
            }
            if (x < 0 || x >= this._matrixWidth || y < 0 || y >= cols) return;

            let i = x + y * this._matrixWidth;
            this.setPixelColor(i, rgb);
        }

        /**
         * For NeoPixels with RGB+W LEDs, set the white LED brightness. This only works for RGB+W NeoPixels.
         * @param pixeloffset position of the LED in the strip
         * @param white brightness of the white LED
         */
        //% blockId="neopixel_set_pixel_white" block="%strip|set pixel white LED at %pixeloffset|to %white" 
        //% blockGap=8
        //% weight=80
        //% parts="neopixel" advanced=true
        setPixelWhiteLED(pixeloffset: number, white: number): void {
            if (this._mode === NeoPixelMode.RGBW) {
                this.setPixelW(pixeloffset >> 0, white >> 0);
            }
        }


        /**
         * Send all the changes to the strip.
         */
        //% blockId="neopixel_show" block="%strip|show" blockGap=8
        //% weight=79
        //% parts="neopixel"
        show() {
            sendBuffer(this.buf, this.pin);
        }

        /**
         * Turn off all LEDs.
         * You need to call ``show`` to make the changes visible.
         */
        //% blockId="neopixel_clear" block="%strip|clear"
        //% weight=76
        //% parts="neopixel"
        clear(): void {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.fill(0, this.start * stride, this._length * stride);
        }

        /**
         * Gets the number of pixels declared on the strip
         */
        //% blockId="neopixel_length" block="%strip|length" blockGap=8
        //% weight=60 advanced=true
        length() {
            return this._length;
        }

        /**
         * Set the brightness of the strip. This flag only applies to future operation.
         * @param brightness a measure of LED brightness in 0-255. eg: 255
         */
        //% blockId="neopixel_set_brightness" block="%strip|set brightness %brightness" blockGap=8
        //% weight=59
        //% parts="neopixel" advanced=true
        setBrightness(brightness: number): void {
            this.brightness = brightness & 0xff;
        }

        /**
         * Apply brightness to current colors using a quadratic easing function.
         **/
        //% blockId="neopixel_each_brightness" block="%strip|ease brightness" blockGap=8
        //% weight=58
        //% parts="neopixel" advanced=true
        easeBrightness(): void {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            const br = this.brightness;
            const buf = this.buf;
            const end = this.start + this._length;
            const mid = Math.idiv(this._length, 2);
            for (let i = this.start; i < end; ++i) {
                const k = i - this.start;
                const ledoffset = i * stride;
                const br = k > mid
                    ? Math.idiv(255 * (this._length - 1 - k) * (this._length - 1 - k), (mid * mid))
                    : Math.idiv(255 * k * k, (mid * mid));
                serial.writeLine(k + ":" + br);
                const r = (buf[ledoffset + 0] * br) >> 8; buf[ledoffset + 0] = r;
                const g = (buf[ledoffset + 1] * br) >> 8; buf[ledoffset + 1] = g;
                const b = (buf[ledoffset + 2] * br) >> 8; buf[ledoffset + 2] = b;
                if (stride == 4) {
                    const w = (buf[ledoffset + 3] * br) >> 8; buf[ledoffset + 3] = w;
                }
            }
        }

        /** 
         * Create a range of LEDs.
         * @param start offset in the LED strip to start the range
         * @param length number of LEDs in the range. eg: 4
         */
        //% weight=89
        //% blockId="neopixel_range" block="%strip|range from %start|with %length|leds"
        //% parts="neopixel"
        //% blockSetVariable=range
        range(start: number, length: number): Strip {
            start = start >> 0;
            length = length >> 0;
            let strip = new Strip();
            strip.buf = this.buf;
            strip.pin = this.pin;
            strip.brightness = this.brightness;
            strip.start = this.start + Math.clamp(0, this._length - 1, start);
            strip._length = Math.clamp(0, this._length - (strip.start - this.start), length);
            strip._matrixWidth = 0;
            strip._mode = this._mode;
            return strip;
        }

        /**
         * Shift LEDs forward and clear with zeros.
         * You need to call ``show`` to make the changes visible.
         * @param offset number of pixels to shift forward, eg: 1
         */
        //% blockId="neopixel_shift" block="%strip|shift pixels by %offset" blockGap=8
        //% weight=40
        //% parts="neopixel"
        shift(offset: number = 1): void {
            offset = offset >> 0;
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.shift(-offset * stride, this.start * stride, this._length * stride)
        }

        /**
         * Rotate LEDs forward.
         * You need to call ``show`` to make the changes visible.
         * @param offset number of pixels to rotate forward, eg: 1
         */
        //% blockId="neopixel_rotate" block="%strip|rotate pixels by %offset" blockGap=8
        //% weight=39
        //% parts="neopixel"
        rotate(offset: number = 1): void {
            offset = offset >> 0;
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.rotate(-offset * stride, this.start * stride, this._length * stride)
        }

        /**
         * Set the pin where the neopixel is connected, defaults to P0.
         */
        //% weight=10
        //% parts="neopixel" advanced=true
        setPin(pin: DigitalPin): void {
            this.pin = pin;
            pins.digitalWritePin(this.pin, 0);
            // don't yield to avoid races on initialization
        }

        /**
         * Estimates the electrical current (mA) consumed by the current light configuration.
         */
        //% weight=9 blockId=neopixel_power block="%strip|power (mA)"
        //% advanced=true
        power(): number {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            const end = this.start + this._length;
            let p = 0;
            for (let i = this.start; i < end; ++i) {
                const ledoffset = i * stride;
                for (let j = 0; j < stride; ++j) {
                    p += this.buf[i + j];
                }
            }
            return Math.idiv(this.length(), 2) /* 0.5mA per neopixel */
                + Math.idiv(p * 433, 10000); /* rought approximation */
        }

        private setBufferRGB(offset: number, red: number, green: number, blue: number): void {
            if (this._mode === NeoPixelMode.RGB_RGB) {
                this.buf[offset + 0] = red;
                this.buf[offset + 1] = green;
            } else {
                this.buf[offset + 0] = green;
                this.buf[offset + 1] = red;
            }
            this.buf[offset + 2] = blue;
        }

        private setAllRGB(rgb: number) {
            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            const br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            const end = this.start + this._length;
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            for (let i = this.start; i < end; ++i) {
                this.setBufferRGB(i * stride, red, green, blue)
            }
        }
        private setAllW(white: number) {
            if (this._mode !== NeoPixelMode.RGBW)
                return;

            let br = this.brightness;
            if (br < 255) {
                white = (white * br) >> 8;
            }
            let buf = this.buf;
            let end = this.start + this._length;
            for (let i = this.start; i < end; ++i) {
                let ledoffset = i * 4;
                buf[ledoffset + 3] = white;
            }
        }
        private setPixelRGB(pixeloffset: number, rgb: number): void {
            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            let stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            pixeloffset = (pixeloffset + this.start) * stride;

            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            let br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            this.setBufferRGB(pixeloffset, red, green, blue)
        }
        private setPixelW(pixeloffset: number, white: number): void {
            if (this._mode !== NeoPixelMode.RGBW)
                return;

            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            pixeloffset = (pixeloffset + this.start) * 4;

            let br = this.brightness;
            if (br < 255) {
                white = (white * br) >> 8;
            }
            let buf = this.buf;
            buf[pixeloffset + 3] = white;
        }
    }

    /**
     * Create a new NeoPixel driver for `numleds` LEDs.
     * @param pin the pin where the neopixel is connected.
     * @param numleds number of leds in the strip, eg: 24,30,60,64
     */
    //% blockId="neopixel_create" block="NeoPixel at pin %pin|with %numleds|leds as %mode"
    //% weight=90 blockGap=8
    //% parts="neopixel"
    //% trackArgs=0,2
    //% blockSetVariable=strip
    export function create(pin: DigitalPin, numleds: number, mode: NeoPixelMode): Strip {
        let strip = new Strip();
        let stride = mode === NeoPixelMode.RGBW ? 4 : 3;
        strip.buf = pins.createBuffer(numleds * stride);
        strip.start = 0;
        strip._length = numleds;
        strip._mode = mode;
        strip._matrixWidth = 0;
        strip.setBrightness(255)
        strip.setPin(pin)
        return strip;
    }

    /**
     * Converts red, green, blue channels into a RGB color
     * @param red value of the red channel between 0 and 255. eg: 255
     * @param green value of the green channel between 0 and 255. eg: 255
     * @param blue value of the blue channel between 0 and 255. eg: 255
     */
    //% weight=1
    //% blockId="neopixel_rgb" block="red %red|green %green|blue %blue"
    //% advanced=true
    export function rgb(red: number, green: number, blue: number): number {
        return packRGB(red, green, blue);
    }

    /**
     * Gets the RGB value of a known color
    */
    //% weight=2 blockGap=8
    //% blockId="neopixel_colors" block="%color"
    //% advanced=true
    export function colors(color: NeoPixelColors): number {
        return color;
    }

    function packRGB(a: number, b: number, c: number): number {
        return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);
    }
    function unpackR(rgb: number): number {
        let r = (rgb >> 16) & 0xFF;
        return r;
    }
    function unpackG(rgb: number): number {
        let g = (rgb >> 8) & 0xFF;
        return g;
    }
    function unpackB(rgb: number): number {
        let b = (rgb) & 0xFF;
        return b;
    }

    /**
     * Converts a hue saturation luminosity value into a RGB color
     * @param h hue from 0 to 360
     * @param s saturation from 0 to 99
     * @param l luminosity from 0 to 99
     */
    //% blockId=neopixelHSL block="hue %h|saturation %s|luminosity %l"
    export function hsl(h: number, s: number, l: number): number {
        h = Math.round(h);
        s = Math.round(s);
        l = Math.round(l);

        h = h % 360;
        s = Math.clamp(0, 99, s);
        l = Math.clamp(0, 99, l);
        let c = Math.idiv((((100 - Math.abs(2 * l - 100)) * s) << 8), 10000); //chroma, [0,255]
        let h1 = Math.idiv(h, 60);//[0,6]
        let h2 = Math.idiv((h - h1 * 60) * 256, 60);//[0,255]
        let temp = Math.abs((((h1 % 2) << 8) + h2) - 256);
        let x = (c * (256 - (temp))) >> 8;//[0,255], second largest component of this color
        let r$: number;
        let g$: number;
        let b$: number;
        if (h1 == 0) {
            r$ = c; g$ = x; b$ = 0;
        } else if (h1 == 1) {
            r$ = x; g$ = c; b$ = 0;
        } else if (h1 == 2) {
            r$ = 0; g$ = c; b$ = x;
        } else if (h1 == 3) {
            r$ = 0; g$ = x; b$ = c;
        } else if (h1 == 4) {
            r$ = x; g$ = 0; b$ = c;
        } else if (h1 == 5) {
            r$ = c; g$ = 0; b$ = x;
        }
        let m = Math.idiv((Math.idiv((l * 2 << 8), 100) - c), 2);
        let r = r$ + m;
        let g = g$ + m;
        let b = b$ + m;
        return packRGB(r, g, b);
    }

    export enum HueInterpolationDirection {
        Clockwise,
        CounterClockwise,
        Shortest
    }
	
	



}
