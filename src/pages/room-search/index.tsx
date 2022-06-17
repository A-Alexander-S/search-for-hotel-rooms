import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { DateFilter } from "../../components/DateFilter";
import RoomCard from "../../components/RoomCard";
import LengthStay from "../../components/LengthStay";
import AmountGuestsDropdown from "../../components/AmountGuestsDropdown";
import { RangeSlider } from "../../components/RangeSlider";
import RulesRoom from "../../components/RulesRoom";
import Accessibility from "../../components/Accessibility";
import AmountRoomsDropdown from "../../components/AmountRoomsDropdown";
import AdditionalAmenities from "../../components/AdditionalAmenities";
import "./room-search.scss";
import Button from "../../components/Button";
import { IRoom } from '../../reducers/roomsReducer'
import { getRoomsThunk } from "../../actions/filterSearch";

interface IRoomSearchProps {
  rooms: IRoom[],
  getRoomsThunk: Function
}

class RoomSearch extends React.Component<IRoomSearchProps> {

  constructor(props: IRoomSearchProps) {
    super(props);
    this.handleClickButtonSearch = this.handleClickButtonSearch.bind(this);
  }

  /**
   * Getting an array of rooms
  */
  componentDidMount() {
    this.props.getRoomsThunk();
  }

  /**
   * Requests from the server all rooms matching the filter
  */
  handleClickButtonSearch = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    this.props.getRoomsThunk();
  }

  render(): React.ReactNode {
    return (
      <>
        <Header />
        <main className="main-search">
          <div className="container">
            <div className="main-search__flex">
              <section className="main-search__filter">
                <div className="main-search__wrapp-length-stay main-search__filter-item">
                  <LengthStay
                    options={{
                      dateArrivalTitle: "Прибытие",
                      dateArrivalPlaceholder: "Прибытие",
                      dateDepartureTitle: "Прибытие",
                      dateDeparturePlaceholder: "Выезд",
                    }} />
                </div>
                <div className="main-search__wrapp-amount-guest-dropdown main-search__filter-item">
                  <AmountGuestsDropdown />
                </div>
                <div className="main-search__wrapp-range-slider main-search__filter-item">
                  <RangeSlider />
                </div>
                <div className="main-search__wrapp-room-payment main-search__filter-item">
                  <RulesRoom
                    options={{
                      title: "правила дома"
                    }} />
                </div>
                <div className="main-search__wrapp-accessibility main-search__filter-item">
                  <Accessibility
                    options={{
                      title: "доступность"
                    }} />
                </div>
                <div className="main-search__wrapp-amount-rooms-dropdown main-search__filter-item">
                  <AmountRoomsDropdown
                    options={{
                      title: "удобства номера"
                    }} />
                </div>
                <div className="main-search__wrapp-additional-amenities main-search__filter-item">
                  <AdditionalAmenities
                    options={{
                      title: "дополнительные удобства"
                    }} />
                </div>
                <Button options={{
                  classButton: "button-background",
                  text: "Поиск",
                  width: "85%",
                  height: "",
                  img: false
                }}
                  onClick={this.handleClickButtonSearch} />
              </section>
              <section className="main-search__rooms">
                <p className="main-search__rooms-title">
                  Номера, которые мы для вас подобрали
                </p>
                <div className="main-search__rooms-flex">
                  {this.props.rooms.map((room: IRoom) => {
                    return <div className="main-search__wrapp-room-card">
                      <RoomCard key={room.id} options={{
                        id: room.id,
                        roomNumber: room.roomNumber,
                        price: room.price,
                        countBedrooms: room.countBedrooms,
                        countBeds: room.countBeds,
                        countBathrooms: room.countBathrooms,
                        corridorWidth: room.corridorWidth,
                        desktop: room.desktop,
                        chairForFeeding: room.chairForFeeding,
                        crib: room.crib,
                        airConditioning: room.airConditioning,
                        noiseAbsorbingWalls: room.noiseAbsorbingWalls,
                        windowInEveryBedroom: room.windowInEveryBedroom,
                        smoke: room.smoke,
                        pets: room.pets,
                        guests: room.guests,
                        imgsRoom: room.imgsRoom,
                        rating: room.rating,
                        createdAt: room.createdAt,
                        updatedAt: room.updatedAt
                      }} />
                    </div>
                  })}
                </div>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (store: any) => ({
  rooms: store.roomsReducer.rooms,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  getRoomsThunk
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(RoomSearch);
