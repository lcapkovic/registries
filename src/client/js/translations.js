angular.module('registries')
.config(['$translateProvider', function($translateProvider) {
	$translateProvider.preferredLanguage('sk');
	$translateProvider.useMissingTranslationHandlerLog();
	$translateProvider.translations('sk', {
		'login.title': 'Prihlásenie',
		'login.loginName': 'Login',
		'login.password': 'Heslo',
		'login.forgottenPassword': 'Zabudnuté heslo',
		'login.authentication.failed': 'Prihlásenie zlyhalo',
		"schema.people.baseData": "Základné informácie",
		"schema.people.baseData.identifier": "Identifikátor",
		"schema.people.baseData.name": "Meno",
		"schema.people.baseData.surName": "Priezvisko",
		"schema.people.baseData.bornName": "Rodné priezvisko",
		"menu.member.title": "Člen",
		"menu.player.title": "Hráč",
		"menu.referee.title": "Rozhodca",
		"menu.coach.title": "Tréner",
		"menu.stadium.title": "Štadión",
		"menu.club.title": "Klub",
		"menu.person.title": "Osoba",

		"menu.company.title": "Spoločnosť",
		"menu.my.profile.title": "Môj profil",
		"menu.permissions.title": "Oprávnenia",
		"menu.schemas.title": "Schémy",
		"menu.new.lower.level": "Nový",
		"menu.search.lower.level": "Hľadať",
		"menu.profile.lower.level": "Profil",
		"menu.change.password.lower.level": "Zmena hesla",
		"menu.new.group.lower.level": "Nová skupina",
		"menu.permission.groups.lower.level": "Skupiny oprávnení",
		"menu.user.permissions.lower.level": "Oprávnenia používateľov",
		"menu.schema.list.lower.level": "Zoznam schém",
		"header.settings": "Nastavenia",
		"header.log.out": "Odhlásiť sa",
		"personal.change.password.change.password": "Zmena hesla",
		"personal.change.password.current.password": "Staré heslo",
		"personal.change.password.new.password": "Nové heslo",
		"personal.change.password.new.password.check": "Kontrola nového hesla",
		"generic.search.searching": "Vyhľadávanie",
		"generic.search.add": "Pridať",
		"generic.search.remove": "Zrušiť",
		"generic.search.search": "Hľadať",
		"generic.search.atribute": "Atribút",
		"generic.search.operator": "Operátor",
		"generic.search.value": "Hodnota",
		"generic.search.view": "Zobraziť",
		"generic.search.result.of.searching": "Výsledok vyhľadávania",
		"registry.new.new": "Nový",
		"registry.new.cancel": "Zrušiť",
		"registry.new.send": "Odoslať",
		"security.group.edit.list.of.security.groups": "Zoznam bezpečnostných skupín",
		"security.group.edit.id": "ID",
		"security.group.edit.edit": "Upraviť",
		"security.group.edit.actions": "Akcie",
		"security.group.edit.save": "Uložiť",
		"security.group.edit.available.permissions": "Dostupné práva",
		"security.group.edit.name": "Názov",
		"security.group.edit.added.permissions": "Pridelené práva",
		"security.group.edit.permissions": "Oprávnenia",
		"security.group.edit.name.of.group": "Názov skupiny",
		"security.group.edit.id.of.group": "Identifikátor skupiny",
		"security.group.edit.modification.of.security.group": "Modifikácia bezpečnostnej skupiny",
		"schema.editor.save": "Uložiť",
		"schema.editor.edit": "Upraviť",
		"schema.editor.id": "ID",
		"schema.editor.name": "Názov",
		"schema.editor.actions": "Akcie",
		"schema.editor.size": "Veľkosť",
		"schema.editor.list.of.schemas.for.editation": "Zoznam schém na editáciu",
		"personal.change.password.passwords.not.equal": "Nové a kontrolné heslo sa nerovnajú!",
		"personal.change.password.password.changed": "Heslo zmenene",
		"personal.change.password.password.not.changed": "Heslo sa nepodarilo zmeniť: {{data}}",
		'registry.succesfully.saved':'Úspešne uložené',
		'registry.unsuccesfully.saved':'Nepodarilo sa uložiť dáta!',
		'registry.form.not.filled.correctly':'Formulár nie je správne vyplnený',
		'psui.uploadable.image.unsupported.image.type':'Nepodporovaný formát obrázku',
		'psui.imageresizor.rotate':'otočiť',
		'psui.imageresizor.ok':'ok',
		'date.monday':'Po',
		'date.tuesday':'Ut',
		'date.wednesday':'St',
		'date.thursday':'Št',
		'date.friday':'Pi',
		'date.saturday':'So',
		'date.sunday':'Ne',
		'date.jan':'Jan',
		'date.feb':'Feb',
		'date.mar':'Mar',
		'date.apr':'Apr',
		'date.may':'Máj',
		'date.jun':'Jún',
		'date.jul':'Júl',
		'date.aug':'Aug',
		'date.sep':'Sep',
		'date.oct':'Okt',
		'date.nov':'Nov',
		'date.dec':'Dec',
		'date.current.day':'Dnešný deň',
		'security.user.edit.searching':'Vyhľadávanie',
		'security.user.edit.value':'Hodnota',
		'security.user.edit.operator':'Operátor',
		'security.user.edit.save':'Uložiť',
		'security.user.edit.available.permissions':'Dostupné práva',
		'security.user.edit.added.permissions':'Pridelené práva',
		'security.user.edit.permissions.for.user':'Práva pre používateľa',
		'security.user.edit.available.groups':'Dostupné skupiny',
		'security.user.edit.added.groups':'Pridelené skupiny',
		'security.user.edit.groups.for.users':'Skupiny pre používateľa',
		'security.user.edit.edit':'Upraviť',
		'security.user.edit.actions':'Akcie',
		'security.user.edit.result':'Výsledok',
		'security.user.edit.search':'Hľadať',
		'security.user.edit.add':'Pridať',
		'security.user.edit.attribute':'Atribút',
		'security.user.edit.cancel':'Zrušiť',
		
		
		"errors.validation.required": "Povinné pole",


	});

	$translateProvider.translations('cz', {
		'login.title': 'Přihlášení',
		'login.loginName': 'Přihlašovací jméno',
		'login.password': 'Heslo',
		'login.forgottenPassword': 'Zapomenuté heslo',
		"schema.people.baseData": "Základní informace",
		"schema.people.baseData.identifier": "Identifikátor",
		"schema.people.baseData.name": "Jméno",
		"schema.people.baseData.surName": "Příjmení",
		"schema.people.baseData.bornName": "Rodné příjmení",
		//TODO
		"menu.member.title": "Člen_cz",

		"errors.validation.required": "Povinné pole",
	});
}])
.controller('langSelectCtrl', ['$scope', '$translate', function($scope, $translate) {
	$scope.setLang = function(lang) {
		$translate.use(lang);
	};
}]);
