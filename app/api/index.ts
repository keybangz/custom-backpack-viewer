import { PrismaClient } from "@prisma/client";
import { CWX } from "./util/CWX";

export const prisma = new PrismaClient()

/*
"Items" // section
{
	"{afterburner-id}" // subsection - EACH WEAPON
	{
		"name"			"The Afterburner"
		"inherits"		"Upgradeable TF_WEAPON_FLAMETHROWER"
		"attributes_game"
		{
			"mod flamethrower back crit"	"1"
			"max health additive bonus"		"1000"
			"weapon burn time increased"	"100"
			"fire retardant"				"1"
			"maxammo primary increased"		"1000"
			"move speed bonus"				"30"
			"active health regen"			"20"
			"mult airblast refire time"		"0.1"
			"airblast vertical pushback scale"	"10"
			"deflection size multiplier"		"5"
			"burn damage earns rage"			"1"
			"flame_spread_degree"				"90"
			"SPELL: Halloween green flames"	"1"
		}
	}
}


const type: string
const name = '';

as reinterpret_cast<type>(name)

(char)name = <string>"key"


"123" = unknown(12123143124312) -> string = ""

const num = 1
comst str = num as unknown as string

Blanket of type rules

*/

// Work from deepest SubKey to top level.
const attributes_game = new CWX
attributes_game.set('mod flamethrower back crit', "1")
attributes_game.set('max health additive bonus', "1000")

const afterburner_id = new CWX
afterburner_id.setSubKey('attributes_game', attributes_game)
afterburner_id.set('name', "The Afterburner")
afterburner_id.set('inherits', "Upgradeable TF_WEAPON_FLAMETHROWER")

const attributes = new CWX
attributes.setSubKey('{afterburner_id}', afterburner_id)

const kv = new CWX
kv.setSubKey('Items', attributes)
