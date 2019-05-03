// Failure Factor Constants

const top_mgmt = 24.55;
const prj_mgmt = 16.17;
const stf_skil = 16.17;
const usr_usec = 13.17;
const tch_impl = 11.98;
const prc_frmk = 7.78;
const org_govt = 6.59;
const com_size = 3.59;


// Success Factor Constants

const eff_comm = 15.65;
const imp_fwrk = 15.42;
const org_skls = 13.51;
const eff_mgnt = 14.51;
const eff_bdgt = 12.06;
const in_stk_in = 13.10;
const in_usr_in = 11.83;
const in_stf_tr = 3.91;

// Array Items

failure_elements = {
    "tmi": top_mgmt,
    "pmi": prj_mgmt,
    "ssi": stf_skil,
    "pfi": prc_frmk,
    "thi": tch_impl,
    "ozi": org_govt,
    "uui": usr_usec,
    "cxi": com_size
}

success_elements = {
    "eci": eff_comm,
    "ifi": imp_fwrk,
    "osi": org_skls,
    "emi": eff_mgnt,
    "iti": in_stf_tr,
    "ebi": eff_bdgt,
    "isii": in_stk_in,
    "iuii": in_usr_in
}

failure_chance = 0;
success_chance = 0;

function calc() {
    failure_chance = 0;
    success_chance = 0;
    for(var i in (failure_elements)) {
        failure_chance += failure_elements[i] * (document.getElementById(i).value / 10);
    }
    console.log(failure_chance)
}

function calcStart() {
    if (checkIfValuesPresent()) {
        calc()
    } else {
        window.alert("Values are Missing or Invalid in the textboxes.\nPlease double check your input.")
    }
}

function checkIfValuesPresent() {
    for(var i in failure_elements) {
        // Bad Day Scenario
        if(document.getElementById(i).value == "" || document.getElementById(i).value == null) {
            return false;
        }
        if(document.getElementById(i).value < 0 || document.getElementById(i).value > 10) {
            return false;
        }
    }
    for(var i in success_elements) {
        // Bad Day Scenario
        if(document.getElementById(i).value == "" || document.getElementById(i).value == null) {
            return false;
        }
        if(document.getElementById(i).value < 0 || document.getElementById(i).value > 10) {
            return false;
        }
    }
    // Good Day Scenario
    return true;
}
