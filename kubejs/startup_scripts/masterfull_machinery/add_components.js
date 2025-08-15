MMEvents.registerPorts(event => {
    function port(name, id, type, config) {
        var portname
        switch (type) {
            case 1:
                portname = "mm:item"
                break;

            case 2:
                portname = "mm:fluid"
                break;
            case 3:
                portname = "mm:energy"
                break;
            case 4:
                portname = "mm:create/kinetic"
                break;
            default:
                type = 1
                portname = "mm:item"
                break;
        }
        event.create(name.toLowerCase().split(" ").join("_"))
            .name(name)
            .controllerId(id)
            .config(portname, c => {
                switch (type) {
                    case 1:
                        c.rows(config[0])
                            .columns(config[1])
                        break;

                    case 2:
                        c.rows(config[0])
                            .columns(config[1])
                            .slotCapacity(config[2])
                        break;

                    case 3:
                        c.capacity(config[0])
                            .maxReceive(config[1])
                            .maxExtract(config[2])
                        break;

                    case 4:
                        c.stress(config[0])

                    default:
                        break;
                }
            })
    }
    //Item Ports
    port("Tiny Item Port", "mm:controller", 1, [1, 1])
    port("Small Item Port", "mm:controller", 1, [2, 2])
    port("Normal Item Port", "mm:controller", 1, [3, 3])
    port("Big Item Port", "mm:controller", 1, [4, 4])
    port("Enormous Item Port", "mm:controller", 1, [5, 5])
    port("Gigantic Item Port", "mm:controller", 1, [6, 6])
    port("Colossal Item Port", "mm:controller", 1, [6, 8])
    port("Titanic Item Port", "mm:controller", 1, [8, 12])
    //Fluid Ports
    port("Small Fluid Port", "mm:controller", 2, [1, 1, 640000])
    port("Normal Fluid Port", "mm:controller", 2, [1, 1, 2560000])
    port("Big Fluid Port", "mm:controller", 2, [1, 1, 10240000])
    port("Enormous Fluid Port", "mm:controller", 2, [1, 1, 163840000])
    port("Gigantic Fluid Port", "mm:controller", 2, [1, 1, 2147483647])
    //Energy Ports
    port("Tiny Energy Port", "mm:controller", 3, [25000, 5000, 2500])
    port("Small Energy Port", "mm:controller", 3, [100000, 20000, 10000])
    port("Normal Energy Port", "mm:controller", 3, [1000000, 200000, 100000])
    port("Big Energy Port", "mm:controller", 3, [10000000, 2000000, 1000000])
    port("Enormous Energy Port", "mm:controller", 3, [25000000, 5000000, 2500000])
    port("Gigantic Energy Port", "mm:controller", 3, [2147483647, 2147483647, 2147483647])
})


MMEvents.registerPorts(event => {
    event.create("colossal_gas_port")
        .name("Colossal Gas Port")
        .controllerId("mm:controller")
        .config("mm:mekanism/gas", c => {
            c.capacity(2147483647)
        })
})