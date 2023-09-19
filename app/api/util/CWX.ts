
/*
KeyValues
"Items" section -> 
    {attribute_id} section -> 
        IntoKey -> 
            'name'  -> 'The Afterburner'
        IntoSubKey ->
            'inherits' -> 'Upgradeable TF_WEAPON_FLAMETHROWER'

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
*/

export class CWX {
	store = new Map<string, string>
	subKeys = new Map<string, CWX>
	
	set(key: string, value: string) {
		this.store.set(key, value)
	}

	get(key: string) {
		return this.store.get(key)
	}

	setSubKey(key: string, value: CWX) {
		this.subKeys.set(key, value)
	}

	getSubKey(key: string) {
		return this.subKeys.get(key)
	}

	private formatKey(key: string) {
		return JSON.stringify(key)
	}

	private formatKeyValue(key: string, value: string) {
		return `${this.formatKey(key)} ${JSON.stringify(value)}`
	}

	stringify(tab = 0) {
		const sections = new Array<string>
		const prefix = ('\t').repeat(tab)
		
		this.store.forEach((value, key) =>
			sections.push(this.formatKeyValue(key, value))
		)

		this.subKeys.forEach((value, key) => 
			sections.push(this.formatKey(key) + `\n${prefix}{\n` + value.stringify(tab+1) + `\n${prefix}}`)
		)

		return sections.map(s => prefix+s).join('\n')
	}
}

