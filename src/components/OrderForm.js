// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import * as Yup from 'yup';

import React, { useState, useEffect } from 'react';
import Header from './Header';
import './OrderForm.css';
import { Link } from 'react-router-dom';


const OrderForm = () => {
    const [name, setName] = useState("");
    const [size, setSize] = useState("");
    const [adet, setAdet] = useState(0);
    const [toppings, setToppings] = useState([]);
    const [special, setSpecial] = useState("");
    const a = 85.5;
    const [total, setTotal] = useState();
    const [secimler, setSecimler] = useState(0.0);
    const [doughType, setDoughType] = useState("");


    // const [errorMessage, setErrorMessage] = useState("");
    // const history = useHistory();
    // const PizzaFormSchema = Yup.object().shape({
    //     name: Yup.string().min(2),

    //     toppings: Yup.array().test(

    //         (value) => {
    //             if (value && value.length > 10) {
    //                 console.log("En fazla 10 adet seçim yapılabilir!")
    //                 return false;
    //             }
    //             return true;
    //         }
    //     ),
    // });

    const handleNameChange = (e) => {
        setName(e.target.value);
        //isim soyisim
    };


    const handleDoughTypeChange = (e) => {
        setDoughType(e.target.value);
        //dropdown
    };
    const handleSizeChange = (e) => {
        setSize(e.target.value);
        //boyut
    };

    const handleAdetChange = (newAdet) => {
        setAdet(newAdet);

        let secimler = toppings.length * newAdet * 5;
        setSecimler(secimler);

        let total = (a + toppings.length * 5) * newAdet;
        setTotal(total);
    };

    const handleToppingsChange = (e) => {
        const selectedToppings = Array.from(
            document.querySelectorAll('input[name="toppings"]:checked')
        ).map((input) => input.value);
        setToppings(selectedToppings);

        let secimler = selectedToppings.length * adet * 5;
        setSecimler(secimler);
    };

    useEffect(() => {
        let newTotal = (a + toppings.length * 5) * adet;
        setTotal(newTotal);
    }, [adet, toppings]);

    function handleSpecialChange(e) {
        setSpecial(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        // PizzaFormSchema.validate({ name, toppings })
        //     .then(() => {
        //         const order = {
        //             name,
        //             size,
        //             toppings,
        //             special,
        //             Fiyat: total,
        //             adet,
        //         };

        //         axios
        //             .post("https://reqres.in/api/users", order)
        //             .then((response) => {
        //                 console.log("Sipariş başarıyla gönderildi:", response);
        //                 setName("");
        //                 setSize("");
        //                 setToppings([]);
        //                 setSpecial("");
        //                 history.push("/onay");
        //             })
        //             .catch((error) => {
        //                 console.error("Sipariş gönderilirken hata oluştu:", error);
        //             });
        //     })
    };

    return (
        <>
            <div className="container2">
                <div className="header">
                    <Header />
                </div>
            </div>
            <div className="siparis-body">
                <br />
                <h2>Position Absolute Acı Pizza</h2>
                <br />
                <h3>85,50 ₺</h3>
                <p>
                    Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
                    pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
                    diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
                    ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
                    düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
                    lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
                </p>
                <br />
                <form id="pizza-form" onSubmit={handleSubmit}>
                    <label htmlFor="name-input">
                        <b>
                            İsim Soyisim <span className="required">*</span>
                        </b>{" "}
                    </label>
                    <input
                        type="text"
                        id="name-input"
                        name="name-input"
                        value={name}
                        onChange={handleNameChange}
                        required
                        minLength={2}
                    />
                    {/* <p className="error-message">{errorMessage}</p> */}
                    <br />
                    <br />
                    <div className="size-dough-options">
                        <div className="size-option">
                            <label htmlFor="size-dropdown">
                                <b>
                                    Boyut Seç<span className="required">*</span>{" "}
                                </b>
                            </label>
                            <label htmlFor="size-small">
                                <input
                                    type="radio"
                                    id="size-small"
                                    name="size"
                                    value="small"
                                    onChange={handleSizeChange}
                                    required
                                />
                                Küçük
                            </label>
                            <label htmlFor="size-medium">
                                <input
                                    type="radio"
                                    id="size-medium"
                                    name="size"
                                    value="medium"
                                    onChange={handleSizeChange}
                                    required
                                />
                                Orta
                            </label>
                            <label htmlFor="size-large">
                                <input
                                    type="radio"
                                    id="size-large"
                                    name="size"
                                    value="large"
                                    onChange={handleSizeChange}
                                    required
                                />
                                Büyük
                            </label>
                        </div>

                        <div className="dough-option">
                            <label htmlFor="dough-dropdown">
                                <b>Hamur Seç<span className="required">*</span>{" "}</b>
                            </label>
                            <select
                                id="dough-dropdown"
                                value={doughType}
                                name="dough-dropdown"
                                onChange={handleDoughTypeChange}
                                required
                            >
                                <option value="">Hamur Kalınlığı</option>
                                <option value="superthin">İncecik</option>
                                <option value="thin">İnce</option>
                                <option value="thick">Kalın</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <br />
                    <label htmlFor="toppings-checkboxes">
                        <b>
                            Ek Malzemeler
                        </b>
                    </label>{" "}
                    <p>En Fazla 10 malzeme seçebilirsiniz. " 5₺"</p>
                    <br />
                    <div id="toppings-checkboxes">
                        <label htmlFor="pepperoni-checkbox">
                            <input
                                id="pepperoni-checkbox"
                                type="checkbox"
                                name="toppings"
                                value="pepperoni"
                                onChange={handleToppingsChange}
                            />
                            Pepperoni
                        </label>
                        <label htmlFor="mushrooms-checkbox">
                            <input
                                id="mushrooms-checkbox"
                                type="checkbox"
                                name="toppings"
                                value="mushrooms"
                                onChange={handleToppingsChange}
                            />
                            Mantar
                        </label>
                        <label htmlFor="olives-checkbox">
                            <input
                                id="olives-checkbox"
                                type="checkbox"
                                name="toppings"
                                value="olives"
                                onChange={handleToppingsChange}
                            />
                            Zeytin
                        </label>
                        <label htmlFor="sausage-checkbox">
                            <input
                                id="sausage-checkbox"
                                type="checkbox"
                                name="toppings"
                                value="sausage"
                                onChange={handleToppingsChange}
                            />
                            Sosis
                        </label>
                        <label htmlFor="kanada-jambonu-checkbox">
                            <input
                                id="kanada-jambonu-checkbox"
                                type="checkbox"
                                name="toppings"
                                value="kanada-jambonu"
                                onChange={handleToppingsChange}
                            />
                            Kanada Jambonu
                        </label>
                        <label htmlFor="tavuk-izgara-checkbox">
                            <input
                                id="tavuk-izgara-checkbox"
                                type="checkbox"
                                name="toppings"
                                value="tavuk-izgara"
                                onChange={handleToppingsChange}
                            />
                            Tavuk Izgara
                        </label>
                        <label htmlFor="sogan-checkbox">
                            <input
                                id="sogan-checkbox"
                                type="checkbox"
                                name="toppings"
                                value="sogan"
                                onChange={handleToppingsChange}
                            />
                            Soğan
                        </label>
                        <br />
                        <label htmlFor="domates-checkbox">
                            <input
                                id="domates-checkbox"
                                type="checkbox"
                                name="toppings"
                                value="domates"
                                onChange={handleToppingsChange}
                            />
                            Domates
                        </label>
                        <label htmlFor="misir-checkbox">
                            <input
                                id="misir-checkbox"
                                type="checkbox"
                                name="toppings"
                                value="misir"
                                onChange={handleToppingsChange}
                            />
                            Mısır
                        </label>
                        <label htmlFor="jalepeno-checkbox">
                            <input
                                id="jalepeno-checkbox"
                                type="checkbox"
                                name="toppings"
                                value="jalepeno"
                                onChange={handleToppingsChange}
                            />
                            Jalepeno
                        </label>
                        <label htmlFor="sarımsak-checkbox">
                            <input
                                id="sarımsak-checkbox"
                                type="checkbox"
                                name="toppings"
                                value="sarimsak"
                                onChange={handleToppingsChange}
                            />
                            Sarımsak
                        </label>
                        <label htmlFor="biber-checkbox">
                            <input
                                id="biber-checkbox"
                                type="checkbox"
                                name="toppings"
                                value="biber"
                                onChange={handleToppingsChange}
                            />
                            Biber
                        </label>
                        <label htmlFor="ananas-checkbox">
                            <input
                                id="ananas-checkbox"
                                type="checkbox"
                                name="toppings"
                                value="ananas"
                                onChange={handleToppingsChange}
                            />
                            Ananas
                        </label>
                        <label htmlFor="kabak-checkbox">
                            <input
                                id="kabak-checkbox"
                                type="checkbox"
                                name="toppings"
                                value="kabak"
                                onChange={handleToppingsChange}
                            />
                            Kabak
                        </label>
                    </div>
                    <br />
                    <br />
                    <label htmlFor="special-text">Sipariş Notu</label>
                    <br /><br />
                    <input
                        type="text"
                        id="special-text"
                        name="special-text"
                        value={special}
                        onChange={handleSpecialChange}
                        placeholder="Siparişine eklemek istediğin bir not var mı?"
                    />
                    <br />
                    <div className></div>
                    <hr /><br />
                    <div className="general-qty">
                        <div className="qty-of-order">
                            <button
                                className="minus-button"
                                type="button"
                                onClick={() => {
                                    if (adet > 0) {
                                        handleAdetChange(adet - 1);
                                    }
                                }}
                            >
                                -
                            </button>

                            <div className="quantitybox">
                                <span className="quantity">{adet}</span>
                            </div>

                            <button
                                className="plus-button"
                                type="button"
                                onClick={() => handleAdetChange(adet + 1)}
                            >
                                +
                            </button>
                        </div>

                        <div className="order">
                            <div className="order-text">Sipariş Toplamı</div>
                            <div className="choices">
                                {" "}
                                <span>Seçimler:</span> <span>{secimler} ₺</span>
                            </div>
                            <div className="choices" style={{ color: " #ce2829" }}>
                                <span>Toplam:</span> <span>{total} ₺</span>
                            </div>

                            {/* <button id="order-button" type="submit"> */}


                            <Link to="/onay">

                                <button
                                    id="order-button"
                                    type="submit"

                                >
                                    SİPARİŞ VER
                                </button>

                            </Link>


                            {/* </button> */}
                        </div>
                    </div>
                </form>
            </div>


        </>
    );
};

export default OrderForm;