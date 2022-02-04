import React from 'react';
import { useSelector } from 'react-redux';
import ButtonCancelSearch from '../default/buttons/ButtonCancelSearch';

export default function ComponentSearchedAlbuns() {
    
    const searchResult = useSelector((state) => state.ReducerSearchedAlbuns)
    const searchInput = useSelector((state) => state.ReducerSearch)

    return <div>
        <ButtonCancelSearch />
        <p className='recent-albuns-label'>Resultados encontrados para "{searchInput.staticValue}"</p>
        <div className='grid-albuns'>
          {searchResult.albuns}
        </div>
    </div>;
}
/*
[
  {
    album_type: 'album',
    artists: [ [Object] ],
    available_markets: [
      'AD', 'AE', 'AG', 'AL', 'AM', 'AO', 'AR', 'AT', 'AU', 'AZ',
      'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BN',
      'BO', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CG',
      'CH', 'CI', 'CL', 'CM', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ',
      'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES',
      'FI', 'FJ', 'FM', 'FR', 'GA', 'GB', 'GD', 'GE', 'GH', 'GM',
      'GN', 'GQ', 'GR', 'GT', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT',
      'HU', 'ID', 'IE', 'IL', 'IN', 'IQ', 'IS', 'IT', 'JM', 'JO',
      'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KZ',
      'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV',
      ... 84 more items
    ],
    external_urls: {
      spotify: 'https://open.spotify.com/album/0JGOiO34nwfUdDrD612dOp'
    },
    href: 'https://api.spotify.com/v1/albums/0JGOiO34nwfUdDrD612dOp',
    id: '0JGOiO34nwfUdDrD612dOp',
    images: [ [Object], [Object], [Object] ],
    name: 'Happier Than Ever',
    release_date: '2021-07-30',
    release_date_precision: 'day',
    total_tracks: 16,
    type: 'album',
    uri: 'spotify:album:0JGOiO34nwfUdDrD612dOp'
  },
  {
    album_type: 'album',
    artists: [ [Object] ],
    available_markets: [
      'AD', 'AE', 'AG', 'AL', 'AM', 'AO', 'AR', 'AT', 'AU', 'AZ',
      'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BN',
      'BO', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CG',
      'CH', 'CI', 'CL', 'CM', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ',
      'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES',
      'FI', 'FJ', 'FM', 'FR', 'GA', 'GB', 'GD', 'GE', 'GH', 'GM',
      'GN', 'GQ', 'GR', 'GT', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT',
      'HU', 'ID', 'IE', 'IL', 'IN', 'IQ', 'IS', 'IT', 'JM', 'JO',
      'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KZ',
      'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV',
      ... 84 more items
    ],
    external_urls: {
      spotify: 'https://open.spotify.com/album/0S0KGZnfBGSIssfF54WSJh'
    },
    href: 'https://api.spotify.com/v1/albums/0S0KGZnfBGSIssfF54WSJh',
    id: '0S0KGZnfBGSIssfF54WSJh',
    images: [ [Object], [Object], [Object] ],
    name: 'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?',
    release_date: '2019-03-29',
    release_date_precision: 'day',
    total_tracks: 14,
    type: 'album',
    uri: 'spotify:album:0S0KGZnfBGSIssfF54WSJh'
  },
  {
    album_type: 'single',
    artists: [ [Object] ],
    available_markets: [
      'AD', 'AE', 'AG', 'AL', 'AM', 'AO', 'AR', 'AT', 'AU', 'AZ',
      'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BN',
      'BO', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CG',
      'CH', 'CI', 'CL', 'CM', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ',
      'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES',
      'FI', 'FJ', 'FM', 'FR', 'GA', 'GB', 'GD', 'GE', 'GH', 'GM',
      'GN', 'GQ', 'GR', 'GT', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT',
      'HU', 'ID', 'IE', 'IL', 'IN', 'IQ', 'IS', 'IT', 'JM', 'JO',
      'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KZ',
      'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV',
      ... 84 more items
    ],
    external_urls: {
      spotify: 'https://open.spotify.com/album/7fRrTyKvE4Skh93v97gtcU'
    },
    href: 'https://api.spotify.com/v1/albums/7fRrTyKvE4Skh93v97gtcU',
    id: '7fRrTyKvE4Skh93v97gtcU',
    images: [ [Object], [Object], [Object] ],
    name: 'dont smile at me',
    release_date: '2017-12-22',
    release_date_precision: 'day',
    total_tracks: 9,
    type: 'album',
    uri: 'spotify:album:7fRrTyKvE4Skh93v97gtcU'
  },
  {
    album_type: 'single',
    artists: [ [Object] ],
    available_markets: [
      'AD', 'AE', 'AG', 'AL', 'AM', 'AO', 'AR', 'AT', 'AU', 'AZ',
      'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BN',
      'BO', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CG',
      'CH', 'CI', 'CL', 'CM', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ',
      'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES',
      'FI', 'FJ', 'FM', 'FR', 'GA', 'GB', 'GD', 'GE', 'GH', 'GM',
      'GN', 'GQ', 'GR', 'GT', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT',
      'HU', 'ID', 'IE', 'IL', 'IN', 'IQ', 'IS', 'IT', 'JM', 'JO',
      'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KZ',
      'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV',
      ... 84 more items
    ],
    external_urls: {
      spotify: 'https://open.spotify.com/album/2kzPJWrTjVKEYWWhowXLnz'
    },
    href: 'https://api.spotify.com/v1/albums/2kzPJWrTjVKEYWWhowXLnz',
    id: '2kzPJWrTjVKEYWWhowXLnz',
    images: [ [Object], [Object], [Object] ],
    name: 'Happier Than Ever (Edit)',
    release_date: '2021-07-28',
    release_date_precision: 'day',
    total_tracks: 1,
    type: 'album',
    uri: 'spotify:album:2kzPJWrTjVKEYWWhowXLnz'
  },
  {
    album_type: 'single',
    artists: [ [Object], [Object] ],
    available_markets: [
      'AD', 'AE', 'AG', 'AL', 'AM', 'AO', 'AR', 'AT', 'AU', 'AZ',
      'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BN',
      'BO', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CG',
      'CH', 'CI', 'CL', 'CM', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ',
      'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES',
      'FI', 'FJ', 'FM', 'FR', 'GA', 'GB', 'GD', 'GE', 'GH', 'GM',
      'GN', 'GQ', 'GR', 'GT', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT',
      'HU', 'ID', 'IE', 'IL', 'IN', 'IQ', 'IS', 'IT', 'JM', 'JO',
      'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KZ',
      'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV',
      ... 84 more items
    ],
    external_urls: {
      spotify: 'https://open.spotify.com/album/2sBB17RXTamvj7Ncps15AK'
    },
    href: 'https://api.spotify.com/v1/albums/2sBB17RXTamvj7Ncps15AK',
    id: '2sBB17RXTamvj7Ncps15AK',
    images: [ [Object], [Object], [Object] ],
    name: 'lovely (with Khalid)',
    release_date: '2018-04-19',
    release_date_precision: 'day',
    total_tracks: 1,
    type: 'album',
    uri: 'spotify:album:2sBB17RXTamvj7Ncps15AK'
  },
  {
    album_type: 'single',
    artists: [ [Object] ],
    available_markets: [
      'AD', 'AE', 'AG', 'AL', 'AM', 'AO', 'AR', 'AT', 'AU', 'AZ',
      'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BN',
      'BO', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CG',
      'CH', 'CI', 'CL', 'CM', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ',
      'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES',
      'FI', 'FJ', 'FM', 'FR', 'GA', 'GB', 'GD', 'GE', 'GH', 'GM',
      'GN', 'GQ', 'GR', 'GT', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT',
      'HU', 'ID', 'IE', 'IL', 'IN', 'IQ', 'IS', 'IT', 'JM', 'JO',
      'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KZ',
      'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV',
      ... 84 more items
    ],
    external_urls: {
      spotify: 'https://open.spotify.com/album/4iyJ8i3eKbez8JXDbsHIdZ'
    },
    href: 'https://api.spotify.com/v1/albums/4iyJ8i3eKbez8JXDbsHIdZ',
    id: '4iyJ8i3eKbez8JXDbsHIdZ',
    images: [ [Object], [Object], [Object] ],
    name: 'Bored',
    release_date: '2017-03-30',
    release_date_precision: 'day',
    total_tracks: 1,
    type: 'album',
    uri: 'spotify:album:4iyJ8i3eKbez8JXDbsHIdZ'
  },
  {
    album_type: 'single',
    artists: [ [Object] ],
    available_markets: [
      'AD', 'AE', 'AG', 'AL', 'AM', 'AO', 'AR', 'AT', 'AU', 'AZ',
      'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BN',
      'BO', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CG',
      'CH', 'CI', 'CL', 'CM', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ',
      'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES',
      'FI', 'FJ', 'FM', 'FR', 'GA', 'GB', 'GD', 'GE', 'GH', 'GM',
      'GN', 'GQ', 'GR', 'GT', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT',
      'HU', 'ID', 'IE', 'IL', 'IN', 'IQ', 'IS', 'IT', 'JM', 'JO',
      'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KZ',
      'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV',
      ... 84 more items
    ],
    external_urls: {
      spotify: 'https://open.spotify.com/album/4i3rAwPw7Ln2YrKDusaWyT'
    },
    href: 'https://api.spotify.com/v1/albums/4i3rAwPw7Ln2YrKDusaWyT',
    id: '4i3rAwPw7Ln2YrKDusaWyT',
    images: [ [Object], [Object], [Object] ],
    name: 'everything i wanted',
    release_date: '2019-11-13',
    release_date_precision: 'day',
    total_tracks: 1,
    type: 'album',
    uri: 'spotify:album:4i3rAwPw7Ln2YrKDusaWyT'
  },
  {
    album_type: 'single',
    artists: [ [Object] ],
    available_markets: [
      'AD', 'AE', 'AG', 'AL', 'AM', 'AO', 'AR', 'AT', 'AU', 'AZ',
      'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BN',
      'BO', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CG',
      'CH', 'CI', 'CL', 'CM', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ',
      'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES',
      'FI', 'FJ', 'FM', 'FR', 'GA', 'GB', 'GD', 'GE', 'GH', 'GM',
      'GN', 'GQ', 'GR', 'GT', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT',
      'HU', 'ID', 'IE', 'IL', 'IN', 'IQ', 'IS', 'IT', 'JM', 'JO',
      'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KZ',
      'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV',
      ... 84 more items
    ],
    external_urls: {
      spotify: 'https://open.spotify.com/album/31skrF7msmnJZrfgrvoEhn'
    },
    href: 'https://api.spotify.com/v1/albums/31skrF7msmnJZrfgrvoEhn',
    id: '31skrF7msmnJZrfgrvoEhn',
    images: [ [Object], [Object], [Object] ],
    name: 'billie eilish',
    release_date: '2021-04-09',
    release_date_precision: 'day',
    total_tracks: 1,
    type: 'album',
    uri: 'spotify:album:31skrF7msmnJZrfgrvoEhn'
  },
  {
    album_type: 'single',
    artists: [ [Object] ],
    available_markets: [
      'AD', 'AE', 'AG', 'AL', 'AM', 'AO', 'AR', 'AT', 'AU', 'AZ',
      'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BN',
      'BO', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CG',
      'CH', 'CI', 'CL', 'CM', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ',
      'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES',
      'FI', 'FJ', 'FM', 'FR', 'GA', 'GB', 'GD', 'GE', 'GH', 'GM',
      'GN', 'GQ', 'GR', 'GT', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT',
      'HU', 'ID', 'IE', 'IL', 'IN', 'IQ', 'IS', 'IT', 'JM', 'JO',
      'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KZ',
      'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV',
      ... 83 more items
    ],
    external_urls: {
      spotify: 'https://open.spotify.com/album/5G58VVE9ub1KE01Mvbd8XM'
    },
    href: 'https://api.spotify.com/v1/albums/5G58VVE9ub1KE01Mvbd8XM',
    id: '5G58VVE9ub1KE01Mvbd8XM',
    images: [ [Object], [Object], [Object] ],
    name: 'Therefore I Am',
    release_date: '2020-11-12',
    release_date_precision: 'day',
    total_tracks: 1,
    type: 'album',
    uri: 'spotify:album:5G58VVE9ub1KE01Mvbd8XM'
  },
  {
    album_type: 'single',
    artists: [ [Object] ],
    available_markets: [
      'AD', 'AE', 'AG', 'AL', 'AM', 'AO', 'AR', 'AT', 'AU', 'AZ',
      'BA', 'BB', 'BD', 'BE', 'BG', 'BH', 'BI', 'BJ', 'BO', 'BR',
      'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CG', 'CH', 'CI',
      'CL', 'CM', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ', 'DE', 'DJ',
      'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES', 'FI', 'FJ',
      'FM', 'FR', 'GA', 'GB', 'GD', 'GE', 'GH', 'GM', 'GN', 'GQ',
      'GR', 'GT', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT', 'HU', 'ID',
      'IE', 'IL', 'IN', 'IQ', 'IS', 'IT', 'JM', 'JO', 'JP', 'KE',
      'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KZ', 'LA', 'LB',
      'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA',
      ... 82 more items
    ],
    external_urls: {
      spotify: 'https://open.spotify.com/album/1Z0XtKcevvITZ5ydimkYcx'
    },
    href: 'https://api.spotify.com/v1/albums/1Z0XtKcevvITZ5ydimkYcx',
    id: '1Z0XtKcevvITZ5ydimkYcx',
    images: [ [Object], [Object], [Object] ],
    name: 'bitches broken hearts',
    release_date: '2018-03-30',
    release_date_precision: 'day',
    total_tracks: 1,
    type: 'album',
    uri: 'spotify:album:1Z0XtKcevvITZ5ydimkYcx'
  },
  {
    album_type: 'album',
    artists: [ [Object] ],
    available_markets: [
      'AD', 'AE', 'AG', 'AL', 'AM', 'AO', 'AR', 'AT', 'AU', 'AZ',
      'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BN',
      'BO', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CG',
      'CH', 'CI', 'CL', 'CM', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ',
      'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES',
      'FI', 'FJ', 'FM', 'FR', 'GA', 'GB', 'GD', 'GE', 'GH', 'GM',
      'GN', 'GQ', 'GR', 'GT', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT',
      'HU', 'ID', 'IE', 'IL', 'IN', 'IQ', 'IS', 'IT', 'JM', 'JO',
      'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KZ',
      'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV',
      ... 84 more items
    ],
    external_urls: {
      spotify: 'https://open.spotify.com/album/5tzRuO6GP7WRvP3rEOPAO9'
    },
    href: 'https://api.spotify.com/v1/albums/5tzRuO6GP7WRvP3rEOPAO9',
    id: '5tzRuO6GP7WRvP3rEOPAO9',
    images: [ [Object], [Object], [Object] ],
    name: 'Happier Than Ever',
    release_date: '2021-07-30',
    release_date_precision: 'day',
    total_tracks: 16,
    type: 'album',
    uri: 'spotify:album:5tzRuO6GP7WRvP3rEOPAO9'
  },
  {
    album_type: 'single',
    artists: [ [Object] ],
    available_markets: [
      'AD', 'AE', 'AG', 'AL', 'AM', 'AO', 'AR', 'AT', 'AU', 'AZ',
      'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BN',
      'BO', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CG',
      'CH', 'CI', 'CL', 'CM', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ',
      'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES',
      'FI', 'FJ', 'FM', 'FR', 'GA', 'GB', 'GD', 'GE', 'GH', 'GM',
      'GN', 'GQ', 'GR', 'GT', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT',
      'HU', 'ID', 'IE', 'IL', 'IN', 'IQ', 'IS', 'IT', 'JM', 'JO',
      'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KZ',
      'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV',
      ... 84 more items
    ],
    external_urls: {
      spotify: 'https://open.spotify.com/album/5sXSHscDjBez8VF20cSyad'
    },
    href: 'https://api.spotify.com/v1/albums/5sXSHscDjBez8VF20cSyad',
    id: '5sXSHscDjBez8VF20cSyad',
    images: [ [Object], [Object], [Object] ],
    name: 'No Time To Die',
    release_date: '2020-02-13',
    release_date_precision: 'day',
    total_tracks: 1,
    type: 'album',
    uri: 'spotify:album:5sXSHscDjBez8VF20cSyad'
  },
  {
    album_type: 'single',
    artists: [ [Object] ],
    available_markets: [
      'AD', 'AE', 'AG', 'AL', 'AM', 'AO', 'AR', 'AT', 'AU', 'AZ',
      'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BN',
      'BO', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CG',
      'CH', 'CI', 'CL', 'CM', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ',
      'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES',
      'FI', 'FJ', 'FM', 'FR', 'GA', 'GB', 'GD', 'GE', 'GH', 'GM',
      'GN', 'GQ', 'GR', 'GT', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT',
      'HU', 'ID', 'IE', 'IL', 'IN', 'IQ', 'IS', 'IT', 'JM', 'JO',
      'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KZ',
      'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV',
      ... 83 more items
    ],
    external_urls: {
      spotify: 'https://open.spotify.com/album/3oxhQpF3Twbkl18oQYfnh5'
    },
    href: 'https://api.spotify.com/v1/albums/3oxhQpF3Twbkl18oQYfnh5',
    id: '3oxhQpF3Twbkl18oQYfnh5',
    images: [ [Object], [Object], [Object] ],
    name: 'my future',
    release_date: '2020-07-30',
    release_date_precision: 'day',
    total_tracks: 1,
    type: 'album',
    uri: 'spotify:album:3oxhQpF3Twbkl18oQYfnh5'
  },
  {
    album_type: 'single',
    artists: [ [Object] ],
    available_markets: [
      'AD', 'AE', 'AG', 'AL', 'AM', 'AO', 'AR', 'AT', 'AU', 'AZ',
      'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BN',
      'BO', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CG',
      'CH', 'CI', 'CL', 'CM', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ',
      'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES',
      'FI', 'FJ', 'FM', 'FR', 'GA', 'GB', 'GD', 'GE', 'GH', 'GM',
      'GN', 'GQ', 'GR', 'GT', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT',
      'HU', 'ID', 'IE', 'IL', 'IN', 'IQ', 'IS', 'IT', 'JM', 'JO',
      'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KZ',
      'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV',
      ... 84 more items
    ],
    external_urls: {
      spotify: 'https://open.spotify.com/album/25FGyvj0UnD6YYWLq0s9nl'
    },
    href: 'https://api.spotify.com/v1/albums/25FGyvj0UnD6YYWLq0s9nl',
    id: '25FGyvj0UnD6YYWLq0s9nl',
    images: [ [Object], [Object], [Object] ],
    name: 'Bellyache',
    release_date: '2017-02-24',
    release_date_precision: 'day',
    total_tracks: 1,
    type: 'album',
    uri: 'spotify:album:25FGyvj0UnD6YYWLq0s9nl'
  },
  {
    album_type: 'single',
    artists: [ [Object] ],
    available_markets: [
      'AD', 'AE', 'AG', 'AL', 'AM', 'AO', 'AR', 'AT', 'AU', 'AZ',
      'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BN',
      'BO', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CG',
      'CH', 'CI', 'CL', 'CM', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ',
      'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES',
      'FI', 'FJ', 'FM', 'FR', 'GA', 'GB', 'GD', 'GE', 'GH', 'GM',
      'GN', 'GQ', 'GR', 'GT', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT',
      'HU', 'ID', 'IE', 'IL', 'IN', 'IQ', 'IS', 'IT', 'JM', 'JO',
      'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KZ',
      'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV',
      ... 84 more items
    ],
    external_urls: {
      spotify: 'https://open.spotify.com/album/74TRp3O8BRdGxc0XO0UzoY'
    },
    href: 'https://api.spotify.com/v1/albums/74TRp3O8BRdGxc0XO0UzoY',
    id: '74TRp3O8BRdGxc0XO0UzoY',
    images: [ [Object], [Object], [Object] ],
    name: 'Six Feet Under',
    release_date: '2016-11-17',
    release_date_precision: 'day',
    total_tracks: 1,
    type: 'album',
    uri: 'spotify:album:74TRp3O8BRdGxc0XO0UzoY'
  },
  {
    album_type: 'single',
    artists: [ [Object] ],
    available_markets: [ 'CA', 'MX', 'US' ],
    external_urls: {
      spotify: 'https://open.spotify.com/album/2msN7XBgV3JCjQ7Tq3t7i9'
    },
    href: 'https://api.spotify.com/v1/albums/2msN7XBgV3JCjQ7Tq3t7i9',
    id: '2msN7XBgV3JCjQ7Tq3t7i9',
    images: [ [Object], [Object], [Object] ],
    name: 'Ocean Eyes',
    release_date: '2016-11-18',
    release_date_precision: 'day',
    total_tracks: 1,
    type: 'album',
    uri: 'spotify:album:2msN7XBgV3JCjQ7Tq3t7i9'
  },
  {
    album_type: 'single',
    artists: [ [Object] ],
    available_markets: [
      'AD', 'AE', 'AG', 'AL', 'AM', 'AO', 'AR', 'AT', 'AU', 'AZ',
      'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BN',
      'BO', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CG',
      'CH', 'CI', 'CL', 'CM', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ',
      'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES',
      'FI', 'FJ', 'FM', 'FR', 'GA', 'GB', 'GD', 'GE', 'GH', 'GM',
      'GN', 'GQ', 'GR', 'GT', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT',
      'HU', 'ID', 'IE', 'IL', 'IN', 'IQ', 'IS', 'IT', 'JM', 'JO',
      'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KZ',
      'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV',
      ... 84 more items
    ],
    external_urls: {
      spotify: 'https://open.spotify.com/album/44OSkEmvHwdTFhPBCewIks'
    },
    href: 'https://api.spotify.com/v1/albums/44OSkEmvHwdTFhPBCewIks',
    id: '44OSkEmvHwdTFhPBCewIks',
    images: [ [Object], [Object], [Object] ],
    name: 'Ocean Eyes (The Remixes)',
    release_date: '2017-01-13',
    release_date_precision: 'day',
    total_tracks: 4,
    type: 'album',
    uri: 'spotify:album:44OSkEmvHwdTFhPBCewIks'
  },
  {
    album_type: 'single',
    artists: [ [Object] ],
    available_markets: [
      'AD', 'AE', 'AG', 'AL', 'AM', 'AO', 'AR', 'AT', 'AU', 'AZ',
      'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BN',
      'BO', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CG',
      'CH', 'CI', 'CL', 'CM', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ',
      'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES',
      'FI', 'FJ', 'FM', 'FR', 'GA', 'GB', 'GD', 'GE', 'GH', 'GM',
      'GN', 'GQ', 'GR', 'GT', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT',
      'HU', 'ID', 'IE', 'IL', 'IN', 'IQ', 'IS', 'IT', 'JM', 'JO',
      'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KZ',
      'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV',
      ... 84 more items
    ],
    external_urls: {
      spotify: 'https://open.spotify.com/album/0ifM8RTX9HjtCJtY9452bW'
    },
    href: 'https://api.spotify.com/v1/albums/0ifM8RTX9HjtCJtY9452bW',
    id: '0ifM8RTX9HjtCJtY9452bW',
    images: [ [Object], [Object], [Object] ],
    name: 'come out and play',
    release_date: '2018-11-20',
    release_date_precision: 'day',
    total_tracks: 1,
    type: 'album',
    uri: 'spotify:album:0ifM8RTX9HjtCJtY9452bW'
  },
  {
    album_type: 'single',
    artists: [ [Object], [Object] ],
    available_markets: [
      'AD', 'AE', 'AL', 'AM', 'AO', 'AT', 'AU', 'AZ', 'BA', 'BD',
      'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BN', 'BT', 'BW', 'BY',
      'CA', 'CD', 'CG', 'CH', 'CI', 'CM', 'CV', 'CY', 'CZ', 'DE',
      'DJ', 'DK', 'DZ', 'EE', 'EG', 'FI', 'FJ', 'FM', 'FR', 'GA',
      'GB', 'GE', 'GH', 'GM', 'GN', 'GQ', 'GR', 'GW', 'HK', 'HR',
      'HU', 'ID', 'IE', 'IL', 'IN', 'IQ', 'IS', 'IT', 'JO', 'JP',
      'KE', 'KG', 'KH', 'KI', 'KM', 'KR', 'KW', 'KZ', 'LA', 'LB',
      'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC',
      'MD', 'ME', 'MG', 'MH', 'MK', 'ML', 'MN', 'MO', 'MR', 'MT',
      'MU', 'MV', 'MW', 'MY', 'MZ', 'NA', 'NE', 'NG', 'NL', 'NO',
      ... 49 more items
    ],
    external_urls: {
      spotify: 'https://open.spotify.com/album/4E8puNI8tw7cXz6YJkwMew'
    },
    href: 'https://api.spotify.com/v1/albums/4E8puNI8tw7cXz6YJkwMew',
    id: '4E8puNI8tw7cXz6YJkwMew',
    images: [ [Object], [Object], [Object] ],
    name: 'Lo Vas A Olvidar (with ROSALÍA)',
    release_date: '2021-01-21',
    release_date_precision: 'day',
    total_tracks: 1,
    type: 'album',
    uri: 'spotify:album:4E8puNI8tw7cXz6YJkwMew'
  },
  {
    album_type: 'single',
    artists: [ [Object], [Object] ],
    available_markets: [
      'AD', 'AE', 'AG', 'AL', 'AM', 'AO', 'AR', 'AT', 'AU', 'AZ',
      'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BN',
      'BO', 'BR', 'BS', 'BT', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CG',
      'CH', 'CI', 'CL', 'CM', 'CO', 'CR', 'CV', 'CW', 'CY', 'CZ',
      'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES',
      'FI', 'FJ', 'FM', 'FR', 'GA', 'GB', 'GD', 'GE', 'GH', 'GM',
      'GN', 'GQ', 'GR', 'GT', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT',
      'HU', 'ID', 'IE', 'IL', 'IN', 'IQ', 'IS', 'IT', 'JM', 'JO',
      'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KR', 'KW', 'KZ',
      'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV',
      ... 84 more items
    ],
    external_urls: {
      spotify: 'https://open.spotify.com/album/6lMlX68jJrx67hiCqdiDvW'
    },
    href: 'https://api.spotify.com/v1/albums/6lMlX68jJrx67hiCqdiDvW',
    id: '6lMlX68jJrx67hiCqdiDvW',
    images: [ [Object], [Object], [Object] ],
    name: 'bad guy (with Justin Bieber)',
    release_date: '2019-07-11',
    release_date_precision: 'day',
    total_tracks: 1,
    type: 'album',
    uri: 'spotify:album:6lMlX68jJrx67hiCqdiDvW'
  }
]
*/