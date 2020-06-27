import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

import styles from './styles';

import axios from 'axios';

interface IBGEUFResponse {
	sigla: string;
}

interface IBGECityResponse {
	nome: string;
}

interface UF {
	label: string;
	value: string;
}

interface City {
	label: string;
	value: string;
}

const Home = () => {
	const navigation = useNavigation();

	const [UFs, setUFs] = useState<UF[]>([]);
	const [cities, setCities] = useState<City[]>([]);

	const [selectedUF, setSelectedUF] = useState('0');
	const [selectedCity, setSelectedCity] = useState('0');

	useEffect(() => {
		axios
			.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
			.then(response => {
				const ufInitials = response.data.map(uf => { return { label: uf.sigla, value: uf.sigla } });
				setUFs(ufInitials);
			});
	}, []);

	useEffect(() => {
		if (selectedUF === '0') {
			return;
		}

		axios
			.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUF}/municipios`)
			.then(response => {
				const cityNames = response.data.map(city => { return { label: city.nome, value: city.nome } });
				setCities(cityNames);
			});
	}, [selectedUF]);

	function handleNavigateToPoints() {
		navigation.navigate("Points", { uf: selectedUF, city: selectedCity });
	}

	function handleSelectUF(uf: string) {
		setSelectedUF(uf);
	}

	function handleSelectCity(city: string) {
		setSelectedCity(city);
	}

	return (
		<ImageBackground
			source={require('../../assets/home-background.png')}
			style={styles.container}
			imageStyle={{ width: 274, height: 368 }}
		>
			<View style={styles.main}>
				<Image source={require('../../assets/logo.png')} />
				<View>
					<Text style={styles.title}>
						Seu marktplace de coleta de resíduos
				</Text>
					<Text style={styles.description}>
						Ajudamos pessoas a encontrarem pontos de coleta de forma eficinete.
				</Text>
				</View>
			</View>

			<View style={styles.footer}>
				<RNPickerSelect
					placeholder={{
						label: 'Selecione um UF',
						value: null,
						color: '#FFF',
					}}
					items={UFs}
					onValueChange={value => handleSelectUF(value)}
					style={{
						...styles,
						iconContainer: {
							top: 20,
							right: 15,
						},
					}}
					value={selectedUF}
					useNativeAndroidPickerStyle={false}
				/>
				<RNPickerSelect
					placeholder={{
						label: 'Selecione uma cidade',
						value: null,
						color: '#FFF',
					}}
					items={cities}
					onValueChange={value => handleSelectCity(value)}
					style={{
						...styles,
						iconContainer: {
							top: 20,
							right: 15,
						},
					}}
					value={selectedCity}
					useNativeAndroidPickerStyle={false}
				/>
				<RectButton style={styles.button} onPress={handleNavigateToPoints}>
					<View style={styles.buttonIcon}>
						<Text>
							<Icon name="arrow-right" color="#FFF" size={24} />
						</Text>
					</View>
					<Text style={styles.buttonText}>
						Pesquisar
          			</Text>
				</RectButton>
			</View>
		</ImageBackground>
	)
};

export default Home;