//Datos de prueba
//032196647������������������������������PubDSK_1����������������700398540041937241GARCIA����������������������������������PEREZ����������������������������������JUAN��������������������������������������������������������������������������������0M1954052421061O+��2�2��vbÿ��oy��c�d�z���+�Fzª�¼Q¿[Ui]e#f�v»`­O�]¬`FS�P�n�D�hcN\F��~©��=±��#¦�¢��¡���¢®4�¥�ª�®¥$x��¿�ª}»wXP�p|p|y.U3RJ²öU¥,©È?»ÿ�������	�������������������������������������������������������������������7�3��fXÿ���­]�V~'�Ui1zµ�`q²{ÁnOr»X§r­g²T+b¢j�x§^GYXS�]®O¤N�K�v}^�F|�������>�®ªª�N�±�µ�ÞyãiUfÖ�;r(qUUZ`tTZOxU�byEÿ[ITJ�RÿçE#©�Òÿ���������������������������������������������������������������������� R~¸UA��¸àe�ªËà��ÄRU9��RUfýY\îm��¿UvËJÿ
function getDatos(s) {
		s = s.replace(/[^a-zA-Z\-\+0-9]/g, " ");
		const texto = s.match(/[a-zA-Z]+/g);
		const numeros = s.match(/[\d]+/g);
		const grupoSanguineo = s.match(/(O|AB|A|B|)(\-|\+)/g);
		return {
			nombre: [texto[3]].join(" "),
			apellidos: [texto[2], texto[1]].join(" "),
			sexo: texto[4],
			cedula: numeros[2].slice(-10) * 1,
			expedicion: new Date(
				numeros[4].slice(0, 4),
				numeros[4].slice(4, 6) - 1,
				numeros[4].slice(6, 8)
			),
			grupoSanguineo: grupoSanguineo[0],
		};
	}
