/*jshint esversion: 6 */
// Failure Factor Constants

const prj_mgmt = 31.60;
const top_mgmt = 21.67;
const prc_frmk = 14.22;
const stf_skil = 9.93;
const usr_usec = 9.48;
const tch_impl = 7;
const com_size = 3.16;
const org_govt = 2.93;


// Success Factor Constants

const eff_comm = 15.65;
const imp_fwrk = 15.42;
const eff_mgnt = 14.51;
const org_skls = 13.51;
const in_stk_in = 13.10;
const eff_bdgt = 12.06;
const in_usr_in = 11.83;
const in_stf_tr = 3.92;

// Array Items

failure_elements = {
    "tmi": top_mgmt, "pmi": prj_mgmt, "ssi": stf_skil, "pfi": prc_frmk,
    "thi": tch_impl, "ozi": org_govt, "uui": usr_usec, "cxi": com_size
};

success_elements = {
    "eci": eff_comm, "ifi": imp_fwrk, "osi": org_skls, "emi": eff_mgnt,
    "iti": in_stf_tr, "ebi": eff_bdgt, "isii": in_stk_in, "iuii": in_usr_in
};

function calc() {
    failure_chance = 0;
    success_chance = 0;
    for(var i in (failure_elements)) {
        failure_chance += failure_elements[i] * (document.getElementById(i).value / 10);
    }
    for(var i in (success_elements)) {
        success_chance += success_elements[i] * (document.getElementById(i).value / 10);
    }
    failure_chance = parseFloat(failure_chance).toFixed(2);
    success_chance = parseFloat(success_chance).toFixed(2);
    success_chance_failure = 100 - success_chance;
    success_chance_failure = parseFloat(success_chance_failure).toFixed(2);
}

function outputToScreen() {
    document.getElementById("failure_output").textContent = `Your Project has a ${failure_chance}% chance of Failure`;
    document.getElementById("success_output").textContent = `Your Project has a ${success_chance}% chance of Success
                                                             and a ${success_chance_failure}% chance of Failure`;
}

offender = '';
value = '';

function calcStart() {
    if (checkIfValuesPresent()) {
        calc();
        outputToScreen();
    } else {
        window.alert(`Values are Missing or Invalid in the textboxes.
                    \nPlease double check your input.\nPlease check the: ${offender}
                    \nThe input value: '${value}' is not valid.
                    \nPlease input a number from 0 to 10.`);
    }
}

function checkIfValuesPresent() {
    for(var i in failure_elements) {
        // Bad Day Scenario
        if(document.getElementById(i).value == "" || document.getElementById(i).value == null ||
            document.getElementById(i).value < 0 || document.getElementById(i).value > 10) {
            offender = document.getElementById(i).getAttribute("name");
            value = document.getElementById(i).value.toString();
            return false;
        }
    }
    for(var i in success_elements) {
        // Bad Day Scenario
        if(document.getElementById(i).value == "" || document.getElementById(i).value == null ||
            document.getElementById(i).value < 0 || document.getElementById(i).value > 10) {
            offender = document.getElementById(i).getAttribute("name");
            value = document.getElementById(i).value.toString();
            return false;
        }
    }
    // Good Day Scenario
    return true;
}

function randomize() {
    for(var i in (failure_elements)) {
        document.getElementById(i).value = getRandomInt(10);
    }
    for(var i in (success_elements)) {
        document.getElementById(i).value = getRandomInt(10);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
