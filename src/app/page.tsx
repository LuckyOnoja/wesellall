"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ad2 from "./assets/images/ad-2.jpeg";
import ad3 from "./assets/images/ad-3.jpeg";
import ad4 from "./assets/images/ad-4.jpeg";

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    router.push(`/products?${params.toString()}`);
  };

  const categories = [
    {
      name: "Mobiles & Tablets",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDphNQYhcZRN9EIJB6XJy4UYjrKIuFQEqIXJdHkOBf3cThdCLy4RfuGm6EVvuul-ApW7DiHLX9gxEqURNZTJhiIOmpFgWkP-O6poa1cppwSML0xRATh96ldM7iyOHiipeQ0Zh4a91p0_EE6RaHsG5NLGByaDn9WHCillkscCxUsisP2QzQeBENH2m5AURorJqkIDmBskUH-D49IcfeUKieRZbPL_MlCHUTNJiu0kT-OU1ThRImNFsp7WFSCX9Yn7cOR0HSkJHt4_A",
    },
    {
      name: "Electronics",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAjmJTrAv2IxmF81UywBIntFpgxYXFou7vCMLXlJ_aTNheEWzf4a47msimIIbJuHGfjTwJRPTOcIarI7wGjx4FsyiLQAmKNN8Gvw1csLM8vMEr0RdhU6zLIUvUoBYahX8zIIFXn2tqIxkp-d9U028c1tm5eUGFP0fiH5_PoSfBjAyBrnLVbE1Vy0mfe-JYRySshG-HxDbWJpYZW0GnOUB4TFcG_KhrGtdiB_ne3fECZ7ZrxPP4F_yFpr8LkQ68mGvbdb9RydR8Q4Q",
    },
    {
      name: "Home & Furniture",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBDt9h2UwlRDe4llC4vlBgocuzK3i_LXFBKVbSeGgWBkP_xqGgsgq_wZEA8NvYQkPTLvIjy0hTaOLBwYVUvRO2zeudGmlFB90_2l_x3IqgMOUNWKwAO_uMUKqg7nQFMwSIPQKrVcddbUI-EvHhodBHbmdRgAMOfsFNJUrvZIS0-tXxDFep5vsJsjLmOYU0ZkjFPN43NHuc1dBZ1XDYWsSX1Zggw0AZBQpzHJOSfH-mB7nVQiZIf1YhtEybRmNW9FemlHKed2OZ_cg",
    },
    {
      name: "Fashion",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCM2T-Lhz2IgJk7wDFnf9MoIpgx4j38qhUZQGay2WuL1Sr4zHsq-NMiENG5A3kQ8Kx5PiYXVPIKd-0-LccVDiLDGa-LgdjOwLW_VcYp1yUDF3HmmFTTV_mPQlcoXfgHNygTJKBN_khQj4bV8QRYUbX7mXNKSiLuEBBliY1MCUBcozMAzr9P658HhqvtK-j48tmzkgNy72vjCyrB5Ouikz76mq4EYg3VJwKwmNvIljKPb2AxwDdUJEPh1vByMz_q_bGEdM_piYgQjg",
    },
    {
      name: "Health & Beauty",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD3aWdzczY0N-qTnoVkn620s5-uXARqVsX05o2e4t75day6hchWMGkGBWvtNjuLKkdV9sHLRmA_WB0Bad4OA1ebGMdtTYnE0oxszsXGfthXdA6FWAWZIYIBkJ1HvZ3ry5HZVbogvVwTTCAxQcnyLUChQq7TmEJEqS-ZBetqGzqux1_3xN4JKRTHXbtCF3NAaAFw1ijwVUbFNRGbuZ8-TP4PfY8sMpYxPAbOKf-MOT_ZQO0vQDeuTK6syxWQxfhh4H-JKO6CtlxFdw",
    },
    {
      name: "Services",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDgqzd33ld5h4IGHkFX50wx-ql_-Fv4Bbsi2QYST2V1c90CV_j7ZcaM7ZBdBA6IVB-Fxlgct1X_zdzqa12Ts5xe9i_x4A4oF7gTg8X580X5mCs49dqMYZ7ve8ipv-WuSer69uh152bq0V7VKJisuDh_s3z9p_KdcMLIxKDipAXRnNci6WrAShDVWnYi_UVYVs9i7S-1r3iMM3L4eAosPM5k2dUXpXVgwhGGbzG5sT4eK0v1CYiosbg8Am6QEDd2RvHwRMMiTtBAeQ",
    },
    {
      name: "Repair & Construction",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDqQDHtuMFclaxKkkIQPtxB_YM46CJDz5RD1HLPlszVy7hnPjUmrEpFzvN-wfuqhfB3rNyEstBY8M1fE5E7pl48xK-shQkiwGogkFTj_PZ7K5nsHNpVvW3XdX_ddBvjqZyvr3PVFnkXLYeyr7st59O1_zIoDBjYRiln8xlWUGbuHcmz_HFUmTUvKqf8PQz7WJFUFtFZrNdqSQ7v1UwC1ffS6BcI5JQvLrzKCuWDN1r11ElsDoJUMYgJrOWNFBt4iYAw-1poRnAavA",
    },
    {
      name: "Equipment",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBHMzFC5IQ-Ach0HAJDN_YstHxEhIEDY-mtlIh2TCIHHlu6y2HktnU4o9vQNyV8OF0_VT4XS5RGJUQMPC3tjEeD-TyBpRlzP-j5dyCnocTfmT6btF1I9_4tlpHw9QYdQqwicaMBapJItupyFXRX1Z-sFZLMpj57rQrZYaH7Xpr6z98FJ_sao4WhIonV09hX1pL-C5rBAYzZtj62JKFfn9XZWwL9XCW9zj_jxSi05A1TVYniX6xIcPnQY1pK25V7Y4SOXty_v7mzuQ",
    },
    {
      name: "Leisure & Sport",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCTleAOHkwTzEBV1dvF2rgti9zfULqds3Ex7bCc51ypJaCYFfD0ccRinpGmXZKQpvVW1Ku_SRtHVUQBD45PjKQ3VXPpu_v58nIMlbtfHvOVAAfU6QxYtiec06Qu-AQOFvDdEP3FNZfoUV8NK6GkU_Pti4fZMk4ZafN7LMrFxUYEkIYlKShTMw62EXAHHRzz0jOpeUOxhh-5SlrCpHvRyEhfh2j1KAOlEJyaXv2XMaOd8qnNc6i1iY6HLK1f_0LyTB89PdQfLBZQ2A",
    },
    {
      name: "Babies & Kids",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDkEX3SvMwTt5T97mxLYBaUO2bCQRzuHvLsfJlXpgheYHI0Dh3E1x--jawJLwqyHGKd3G-qMa3c3Iybv5Y3MnuGJ7ZKXGd54ALLp_2D7ccyZRnXVT097JjReDyVx_nz1XadTXRQGUswShi7IMRA7ZOU5iJhErAlvJ0cpVzDe1XyAAudEA-UDNkBp47RZFZLY6V7GdQzyjP9cLP8Jfm3g6C8FrmjIpSLhPOvICKf1hbAv8UZGo9v4vdhSWttpSGWTF1mZtQ8rIkA_A",
    },
    {
      name: "Agriculture & Food",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCbtfZp-91Jm_1FZCQB-0tKyzhOtCrmwNP9hfiYTrUgFZ_iPc09RwEzJsBkDchkfubEfRL6wBkviX9ohpmLcY_vGmxr4aK6KSELICtCoxHQAPIx74kuuhvWWRaV1LVP0pKSRixQ3UxefguS0Ete_88vqJDMr3BarjBo4hXOKhD0LlyZGf-p71kTfRZflAcRu8aJNX2zrPJRLhdmpY5B7bny9Q3x0OmGtIeUS5v_nUTe0XrnZ5cxy4e-5Xb4vRVF_5O16Z9WnGB1RQ",
    },
    {
      name: "Animals & Pets",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAGCu9lx0b7_XlWLlYwSZ-6PsoVUPX1KkOgR44NZOY6EsqXM0G_LSeQ58aF1BkVyDQSAdHz1BqEJeg4vJk54X3PG_zom2HbRO4fXfz1nxTLmq5AyE58kJbZr06QPCrv02K09Awjfsu353dIfJ8K3lD2QqoaVbvDqlpMkgf3XrFzJWIsL74sZcCsaH2-xSdysfNdYSR86yx827ACqK1L6cjCchi9pPQkfemWHoi7e3KFQlljPv60GPe8B5TlImxiuIDjYqxATp-Pww",
    },
    {
      name: "Jobs",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDhlXS748LcN2FR6dg5bmV51Ny9SmF2Q1oOtB1IN4CTMWWODtIKhlMKsgxr5RCDvhqM6vHq-maUqwGKWLqBVFO-mPt17_vOj05y6mDlIXO5bUp75mKuQ-1uV_eodDlP_RKARwaP_OgBbR8sv-ICeVkQN4wP00FZzhnJH3aBSAPeO9zrfq-s4_uSEW2cXwT3lDKfOOeuEG0ECyWQkAfRnjalcJSU0McrmGE645y_iZIkSkwC7tflGfSxga3f7ehYLjDq7xqgUujAJw",
    },
    {
      name: "CVs & Work",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD-4c-NQtN7_ZRAsZP1mMx555ZKfpAbdP6dnai-GjUIEkmMOn56VGJrvCPMXDCz06ikWdk21wQMlNiLyi1s0uhZ6M0De-rKIBFix3viKltXnZt-30FF-j7OXOcG5khd8lkMQ1X_CS3g5A4EHmkoLITEqq-1kFXHSB0WSUQ0v4eSbxEP_C5ml8RK0d88s-gOY3DNy3nxQkCD_Jf_czSGbpqcuTV1PHN9_tEPzhmk-bbMH4uPJSvMENNi9DXcWNC9ZLQT_CQzhX8Hiw",
    },
  ];

  const premiumAds = [
    {
      title: "Toyota Camry 2021",
      price: "₦ 8.5M",
      location: "Lagos",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBYkajuIqCGYfuwfVXGXWRDvDBnLBTKDdnft5BzopWA2klnazlXnQymparvK6PKYFzOkyta8W7tO2ixfsYprpgeREruncGKCNBNfFHUitje723GRoS56gTUN1gIADAboCFEm_ThSZSKJDihIu7CStUFjyqZpkfQaSN3o4fUnEO_iXI8hLChrlEsspxYoLYRI2nHGNpPdIx_i_3gpy0M8sg8tgx1LdbiveCjpz9hBryWokg1f8ebdRIzUp24GqdrfD9UkAYW_8bAEQ",
    },
    {
      title: "iPhone 15 Pro Max",
      price: "₦ 1.2M",
      location: "Abuja",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCFBsx2ugUFtLxtNHa7xTDv-C5pA4EX2xgAQw_4S20a96i4M4YExJzYRP0L_GDQReFfcpk4egVXVqm2-NrpWcvrUv6kdmR9za2OYTMk16odQjBtc1Cqv-4gin3QKel6Q8WAe9EVrKKHrsFL8n_hmnUa_i0ODPToPYjo_dpQOOeqbKN-qIYy40pcwuegzoRWqIJEAJwcpN97jtb6wZpMVvG58oIkOoyMwlrBQSdvV6SxKq-LmRVb1-zUHLSn3itiHInPSoVE21xnMg",
    },
    {
      title: "Luxury 3 Bed Flat",
      price: "₦ 45M",
      location: "Lekki",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCzlzcQJhWyo3p39-FtBiIoyqcBg3zewCxqZA465TJkwOw18DWhoKdZAsryRWFEB1n1X23z9sN09GzDk5tl7FOkvTfPwDWV4PsYLiDiApCrZqEMwDwrCYOuIGGIs_oK2Djj8jPsvcEVtxOIPVTWGclsx7nt4IfTYBKu97NzFSD7NoUC0bJmNl8EH1nlVBJbo7tuhfWja6SmnL4AWewjBREh1sfjWelVnxbfbQWOVUkwr5IfWByRCro59RMNs3RLs__mislQDO4-Uw",
    },
    {
      title: "Gaming Setup Full",
      price: "₦ 450K",
      location: "PH City",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDpc5c0MSfuZs1mUIw7TYK9ypMWhPXAAUhDs8b-5a6JPmJKvYllCjnpQsDziHLDX5NGSWsS-ZS021uK4F0sUgVzQR86jrEudGEHKcIi3miwtF1K-QymYgu23_o9vE5ek-RGh-4e-nCVf0Xtw409NFtugy7B8A5dTkh_SoHa9gDNp-VeH7JPjj0BCKZHRvnUOKmJdv7u3BWgTCVs7S75Oci_bC8xCIDsPAspc08Kck2xpb_5I6hft926ylguRoUs5xMOqF3OOmsFKA",
    },
    {
      title: "Foreign Used Benz",
      price: "₦ 12M",
      location: "Lagos",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDF7vXhsODNWfxqcBk1Jeyzx0IkGIzX_rhRIpbBId_VZ-Np1CNnW-v19pDazso56gy3ZldTbm3vX9pO5T2SyJeAK-1n8vtYPrBTLBJ9SoQ6XXQLkmplCIwSXMPvzROPNlENVq1EbY_k1T6W5Wc_l9YP8G2fFaekc-E9s2fsZF5DLt_kL0H8GM9QwJy6m-rsww_N81ZTCy13HRCdgWGOT2pPt_HLBVWls7hTnV1ZBfnKXRKY8_zWUyzGmheyW32_1ZWn9GuzalHjBA",
    },
  ];

  const freshRecommendations = [
    {
      title: "German Shepherd Puppy",
      price: "₦ 150K",
      location: "Ogun",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuArqSjRYnu0tIVLIf9qe_ROyrYcAE62U7z5-jxBrR65gwxaAcJiMZ9ilr2hPaD9hprbwvEfNr3NXtOBRsRi7E_16mpMmvVFTeidXfLyK4FjZvpZmKMu7CcUY7PLYf5PXC6k8nZOw5grsX9yilzV8FSXjIRuO6JLQ2DM6zMBm4r-0lHIzC-javW6FNVcB3_CcS67TFRcd0lPl_GMPgi8xbG7YPJK13qHMDOs3wpXeR4r1lhzFXRWMDJswI4vFBhxMuWv0-K1K3UBMQ",
    },
    {
      title: "Office Sofa Set",
      price: "₦ 80K",
      location: "Lagos",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB-Cy89j5Ub_eNPf-6k1m1Ly2HBvoSRAnZ1O45wRKWVCsjAlg2eYO2zceIPDRnUYpOArE0hL7Xw3JlYx6inLqm83FgSOUG3Hp_SJlz1P8nGvCyMXnq_BPfWL-xV93hZDoa0CbwOgKwZv-Qk2ohzQtYIJhBha7BZfwyJsHUUeVCrRf-CsSv1VBvC6qvvDkhWVhieVbwrAvTcNucI8A7glN2zKjdrOts4V4TVqHsix1YG1QuWbE_Nmu5DtcGXotpcX2vk_SBdWZyKEg",
    },
    {
      title: "AC Repair Service",
      price: "Contact for Price",
      location: "Abuja",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD7cxuFsvWQneDFDLzg3kyXvfJH6z1k-fF9YJKG44SY452xNo1feKWIr_XFgeu02kMbwYi34o_0dW5kEj6t7HSRordJFPAKpghYMR5OVWsNqoGrAZqruMGsnL16T7tLwqq5-uyGQ1xFsTfP_ezp0k6GJ7DvRBtpWfGdFTcA-fJdGnpD3aJveOG1rwa72Xz5gAhfYsXCaI6uhCVNNzNLsd-Oeq1PpgciFlTMkcP1R49PHksLvMH4A4C5mB3K8_Ol4ggf3ak8vzOo7w",
    },
    {
      title: "Vintage Denim Jacket",
      price: "₦ 12K",
      location: "Kano",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAX0l9AzYsaTuZ6X55sL03Gwv6NPZPWQzcc7Y32-93SVqo_bcQOMndF6alt9heicaUh5httFV7MchwUzy9hFPWAclv6WI5k3RbzEalbZKfX4OSjstJ3k47Hi82AYb31rdIXIvmxCIj7096WQSRYia48HKcJHTTehlKvC1-F_bD7ZyGnoSw5-yrhWcxoptBjJs0uUXIsx28nDKwN9Rq2a2UfuFkrSCcMqf-Dk3x49HQeWP03xfVS09dXUlv3Ww_u6n_68UhrWy6ncg",
    },
    {
      title: "Sales Associate Job",
      price: "₦ 100K/mo",
      location: "Lagos",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBLleH8qsh6_MG5Mx0LDXTIG6VAcdQr00MZ1WhQuHtkga4YsMnYK2pq9N49myPc6AIVXly0od6-Habc3Rd1Y3XRFE55NOCW9VckETTtjJpDF9IhNe6jI_aZLaa-ZejhN0ES85bsFsn6i9lEN1CtCUiO0e38grVQeWh-B1oSTw473MnShxR6r9QMHU0SoOsgBybUC5Z72PdfNJvrXQ7ZI-XEKYrGJTWtPEvJQxSB6DAkHaqza0qyWW8eVtOWFs7kHsjMx2vDd2a0RQ",
    },
    {
      title: "Used MacBook Air",
      price: "₦ 350K",
      location: "Ibadan",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA3zs12IpCzcb9y6dk7KmqWMH4NYK6KQO9Cm0HKsRRzeD3nt98gUOKNb5QetYn4vVwGwBSgQqIGRAJlAVUdx2IU6yJqBht4O0gH1v-z4i_hnfELdzz6Ic05eWXlpmiBfPOA31ewIvsNRV2OecEHlTNA8yLPzrVDLUD2FyhE3KXSLmEzVsW-y7BPDx-8hqazixe32xNas8F51sLOKOEHZwx0-DROsyk4I8VNs6sh8riRfweaA_PupLiS3DepwHD6iPV55KbraxlxnQ",
    },
    {
      title: "Land for Sale",
      price: "₦ 2.5M",
      location: "Owerri",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBcste-V6YLtuwOdcqtJTT6vovRojAolDPLQuFhzpMmI3BKRWTIZ_41LVuXl_V1Reo6UpyBFMOQUsGXXuGk14w-wBCfUklWltzwg1h_mMgXxXCy_xdVacE-HXI-IigG8vC_SwdRoEEdNp4LHkFQrvZtBIi9SMhMl4mhik8odlUdDcSehgBSP7ok9ZGTibAmaMWARts3hNKSo7t52pkSjfBG6XSeOna6Yhfy2IsTlqMunLcktElHSs_Qi_JKdpwDziQri1-ruAeD8g",
    },
    {
      title: "iPhone X 64GB",
      price: "₦ 110K",
      location: "Lagos",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCFBsx2ugUFtLxtNHa7xTDv-C5pA4EX2xgAQw_4S20a96i4M4YExJzYRP0L_GDQReFfcpk4egVXVqm2-NrpWcvrUv6kdmR9za2OYTMk16odQjBtc1Cqv-4gin3QKel6Q8WAe9EVrKKHrsFL8n_hmnUa_i0ODPToPYjo_dpQOOeqbKN-qIYy40pcwuegzoRWqIJEAJwcpN97jtb6wZpMVvG58oIkOoyMwlrBQSdvV6SxKq-LmRVb1-zUHLSn3itiHInPSoVE21xnMg",
      sold: true,
    },
    {
      title: 'Dell Monitor 24"',
      price: "₦ 45K",
      location: "Benin City",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDpc5c0MSfuZs1mUIw7TYK9ypMWhPXAAUhDs8b-5a6JPmJKvYllCjnpQsDziHLDX5NGSWsS-ZS021uK4F0sUgVzQR86jrEudGEHKcIi3miwtF1K-QymYgu23_o9vE5ek-RGh-4e-nCVf0Xtw409NFtugy7B8A5dTkh_SoHa9gDNp-VeH7JPjj0BCKZHRvnUOKmJdv7u3BWgTCVs7S75Oci_bC8xCIDsPAspc08Kck2xpb_5I6hft926ylguRoUs5xMOqF3OOmsFKA",
    },
    {
      title: "Toyota Corolla 2010",
      price: "₦ 3.8M",
      location: "Abuja",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBYkajuIqCGYfuwfVXGXWRDvDBnLBTKDdnft5BzopWA2klnazlXnQymparvK6PKYFzOkyta8W7tO2ixfsYprpgeREruncGKCNBNfFHUitje723GRoS56gTUN1gIADAboCFEm_ThSZSKJDihIu7CStUFjyqZpkfQaSN3o4fUnEO_iXI8hLChrlEsspxYoLYRI2nHGNpPdIx_i_3gpy0M8sg8tgx1LdbiveCjpz9hBryWokg1f8ebdRIzUp24GqdrfD9UkAYW_8bAEQ",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero/Search Section */}
      <section className="pt-24 pb-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-blue uppercase tracking-wide mb-4 font-display flex items-center justify-center gap-3">
            <Image
              alt="Nigerian Flag"
              src="https://flagcdn.com/w80/ng.png"
              width={40}
              height={27}
              className="h-8 md:h-10 w-auto rounded shadow-sm border border-slate-100 object-cover"
            />
            #1 Marketplace
          </h1>
          <div className="flex justify-center mb-2">
            <a
              href="/register"
              className="inline-block mr-4 py-1.5 px-6 rounded-full bg-brand-blue text-white text-sm font-bold tracking-wider uppercase hover:bg-brand-blue/90 transition-colors"
            >
              <span className="inline-block py-1.5 px-6 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-bold tracking-wider uppercase">
                Post Ads
              </span>
            </a>
          </div>
          <div className="w-full max-w-3xl mx-auto relative z-10">
            <form
              onSubmit={handleSearch}
              className="flex flex-col md:flex-row items-center gap-0 shadow-lg shadow-brand-blue/5 rounded-xl border-2 border-brand-blue overflow-hidden"
            >
              <div className="flex-1 flex items-center h-14 w-full px-4 bg-white">
                <span className="material-symbols-outlined text-brand-blue mr-3">
                  search
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none text-brand-blue placeholder-brand-blue/50 w-full h-full focus:ring-0 text-lg"
                  placeholder="Search for items..."
                />
              </div>
              <div className="h-14 w-px bg-brand-blue/20 hidden md:block"></div>
              <button
                type="submit"
                className="w-full md:w-auto h-14 px-8 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold transition-all flex items-center justify-center text-lg uppercase tracking-wide"
              >
                Search
              </button>
            </form>
          </div>
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-brand-blue font-bold tracking-wide text-sm md:text-base uppercase">
            <span>Post Free</span>
            <span className="hidden md:inline">-</span>
            <span>Sell Fast</span>
            <span className="hidden md:inline">-</span>
            <span>Cash Out Instantly</span>
          </div>
          <div className="flex justify-center gap-6 mt-4 text-brand-blue/70 text-xs font-bold uppercase tracking-wider">
            <div className="flex items-center gap-1 text-brand-blue/70">
              <span className="material-symbols-outlined text-sm text-brand-blue">
                verified
              </span>
              Verified Sellers
            </div>
            <div className="flex items-center gap-1 text-brand-blue/70">
              <span className="material-symbols-outlined text-sm text-brand-blue">
                lock
              </span>
              Secure Escrow
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-white" id="categories">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-blue uppercase font-display tracking-tight">
              Marketplace for Nigeria by Nigeria
            </h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/categories?cat=${encodeURIComponent(
                  cat.name.toLowerCase()
                )}`}
                className="group bg-white hover:bg-brand-light border border-slate-200 hover:border-brand-blue rounded-lg p-2 flex flex-col items-center text-center gap-2 transition-all duration-300 hover:shadow-md hover:shadow-brand-blue/10 hover:-translate-y-1"
              >
                <div className="w-full aspect-square rounded-md overflow-hidden bg-slate-50 relative">
                  <Image
                    alt={cat.name}
                    src={cat.image}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 12vw"
                  />
                </div>
                <span className="text-xs font-bold text-brand-blue leading-tight group-hover:text-brand-orange transition-colors">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Sections */}
      <section className="py-8 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[400px]">
            <div className="md:col-span-4 h-[300px] md:h-full bg-brand-light border border-slate-200 rounded-xl overflow-hidden relative group cursor-pointer">
              <Image
                src={ad2}
                alt="Targeted Ad"
                fill
                className="object-cover transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute top-4 left-4 z-20 transition-all duration-300">
                <span className="bg-brand-orange text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                  Targeted Ad
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center text-center p-6 z-10">
                <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  Grow Your Business
                </h3>
                <p className="text-white/90 mb-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  Reach millions of customers across Nigeria instantly.
                </p>
                <button className="bg-brand-orange text-white px-6 py-2 rounded-lg font-bold hover:bg-brand-orange/90 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 delay-300">
                  Advertise Here
                </button>
              </div>
            </div>
            <div className="md:col-span-8 grid grid-rows-2 gap-6 h-full">
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden relative h-[200px] md:h-auto flex items-center justify-between p-8 group cursor-pointer">
                <Image
                  src={ad3}
                  alt="Seasonal Offer"
                  fill
                  className="object-cover transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute top-4 left-4 z-20 transition-all duration-300">
                  <span className="bg-brand-orange text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                    Seasonal Offer
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex items-center justify-between p-8 z-10">
                  <div className="max-w-md transform translate-x-[-20px] group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <h3 className="text-3xl font-black text-white mb-2 font-display">
                      Merry Christmas
                    </h3>
                    <p className="text-white/90">
                      Big discounts on electronics this season.
                    </p>
                  </div>
                  <div className="hidden md:block transform translate-x-[20px] group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <span className="material-symbols-outlined text-8xl text-white/30 rotate-12">
                      celebration
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden relative h-[200px] md:h-auto flex items-center justify-center p-8 text-center group cursor-pointer">
                <Image
                  src={ad4}
                  alt="Premium Feature"
                  fill
                  className="object-cover transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex items-center justify-center p-8 z-10">
                  <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Sell Faster with Premium
                    </h3>
                    <p className="text-white/90 mb-4">
                      Get up to 10x more views on your listings.
                    </p>
                    <Link
                      href="#"
                      className="text-brand-orange font-bold hover:underline flex items-center justify-center gap-1 transition-all duration-300"
                    >
                      Learn More{" "}
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Ads Section */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-brand-blue flex items-center gap-2">
              <span className="material-symbols-outlined text-brand-orange">
                star
              </span>
              Premium Ads
            </h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3">
            {premiumAds.map((ad, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-brand-blue/30 transition-all group"
              >
                <div className="relative aspect-square bg-slate-100">
                  <Image
                    alt="Product image"
                    src={ad.image}
                    fill
                    className="w-full h-full object-cover"
                    sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 14vw"
                  />
                  <span className="absolute top-1 left-1 bg-brand-orange text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                    PREMIUM
                  </span>
                </div>
                <div className="p-2">
                  <h3 className="font-bold text-brand-blue truncate text-xs">
                    {ad.title}
                  </h3>
                  <p className="text-brand-orange font-bold text-xs mt-0.5">
                    {ad.price}
                  </p>
                  <p className="text-[10px] text-brand-blue/60 mt-0.5 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[9px]">
                      location_on
                    </span>
                    {ad.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fresh Recommendations Section */}
      <section className="py-12 bg-white border-t border-slate-100 mb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-brand-blue">
              Fresh Recommendations
            </h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3">
            {freshRecommendations.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 rounded-lg overflow-hidden hover:shadow hover:border-brand-blue/20 transition-all group"
              >
                <div className="relative aspect-square bg-slate-50">
                  <Image
                    alt="Product image"
                    src={item.image}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 14vw"
                  />
                  {item.sold && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-bl">
                      SOLD
                    </span>
                  )}
                </div>
                <div className={`p-2 ${item.sold ? "opacity-60" : ""}`}>
                  <h3 className="font-medium text-brand-blue truncate text-xs">
                    {item.title}
                  </h3>
                  <p className="text-brand-blue font-bold text-xs mt-0.5">
                    {item.price}
                  </p>
                  <p className="text-[10px] text-brand-blue/50 mt-0.5">
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="bg-white border-2 border-brand-blue text-brand-blue font-bold py-3 px-8 rounded-full hover:bg-brand-blue hover:text-white transition-colors">
              Load More Ads
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
