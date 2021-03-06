/***
 *      _   _      _
 *     | \ | |    | |
 *     |  \| | ___| |_ _ __ _____  __
 *     | . ` |/ _ \ __| '__/ _ \ \/ /
 *     | |\  |  __/ |_| | |  __/>  <
 *     |_| \_|\___|\__|_|  \___/_/\_\
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 */
import BinaryStream from '@/network/utils/BinaryStream';
import Protocol from '@/network/bedrock/Protocol';
import BasePacket from './BasePacket';

class ConnectedPing extends BasePacket {
    public pingSendTime: number;

    constructor(time: number) {
        super(Protocol.CONNECTED_PING);
        this.pingSendTime = time;
    }

}

export default ConnectedPing;