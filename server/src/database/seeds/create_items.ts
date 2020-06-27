import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('items').insert([
        { title: 'Capsulas de Café', image: 'capsulas.svg' },
        { title: 'Lâmpadas', image: 'lampadas.svg' },
        { title: 'Metais', image: 'metais.svg' },
        { title: 'Óleo de Cozinha', image: 'oleo.svg' },
        { title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
        { title: 'Pilhas e Baterias', image: 'baterias.svg' },
        { title: 'Plásticos', image: 'plasticos.svg' },
        { title: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
        { title: 'Resíduos Orgânicos', image: 'organicos.svg' },
    ]);
}