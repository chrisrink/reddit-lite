import PropTypes from "prop-types";
import * as React from "react";
import Post from "../Post";

import {
  CellMeasurer,
  CellMeasurerCache
} from "react-virtualized/dist/es/CellMeasurer";
import AutoSizer from "react-virtualized/dist/es/AutoSizer";
import WindowScroller from "react-virtualized/dist/es/WindowScroller";
import {
  createCellPositioner,
  Masonry
} from "react-virtualized/dist/es/Masonry";
import "./styles/postlist.css";

const GUTTER_SIZE = 20;
const DEFAULT_COLUMN_WIDTH = 300;
export default class PostList extends React.PureComponent {
  static propTypes = {
    list: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    this._columnCount = 0;

    this._cache = new CellMeasurerCache({
      defaultHeight: 300,
      defaultWidth: DEFAULT_COLUMN_WIDTH,
      fixedWidth: true
    });

    this._cellRenderer = this._cellRenderer.bind(this);
    this._onResize = this._onResize.bind(this);
    this._renderAutoSizer = this._renderAutoSizer.bind(this);
    this._renderMasonry = this._renderMasonry.bind(this);
    this._setMasonryRef = this._setMasonryRef.bind(this);
  }

  _calculateColumnCount() {
    this._columnCount = Math.floor(
      this._width / (DEFAULT_COLUMN_WIDTH + GUTTER_SIZE)
    );

    this._bodyWidth = this._columnCount * (DEFAULT_COLUMN_WIDTH + GUTTER_SIZE);
  }

  _initCellPositioner() {
    if (typeof this._cellPositioner === "undefined") {
      this._cellPositioner = createCellPositioner({
        cellMeasurerCache: this._cache,
        columnCount: this._columnCount,
        columnWidth: DEFAULT_COLUMN_WIDTH,
        spacer: GUTTER_SIZE
      });
    }
  }

  _resetCellPositioner() {
    this._cellPositioner.reset({
      columnCount: this._columnCount,
      columnWidth: DEFAULT_COLUMN_WIDTH,
      spacer: GUTTER_SIZE
    });
  }

  _setMasonryRef(ref) {
    this._masonry = ref;
  }

  _onResize({ width }) {
    this._width = width;

    this._calculateColumnCount();
    this._resetCellPositioner();
    this._masonry.recomputeCellPositions();
  }

  _cellRenderer({ index, key, parent, style }) {
    const { list } = this.props;

    const post = list[index % list.length];

    return (
      <CellMeasurer cache={this._cache} index={index} key={key} parent={parent}>
        <div style={style}>
          <Post {...post} />
        </div>
      </CellMeasurer>
    );
  }

  _renderAutoSizer({ height, scrollTop }) {
    this._height = height;
    this._scrollTop = scrollTop;

    return (
      <AutoSizer
        disableHeight
        height={height}
        onResize={this._onResize}
        overscanByPixels={0}
        scrollTop={this._scrollTop}
      >
        {this._renderMasonry}
      </AutoSizer>
    );
  }

  _renderMasonry({ width }) {
    this._width = width;

    this._calculateColumnCount();
    this._initCellPositioner();

    return (
      <div className="postlist">
        <Masonry
          autoHeight={true}
          cellCount={52}
          cellMeasurerCache={this._cache}
          cellPositioner={this._cellPositioner}
          cellRenderer={this._cellRenderer}
          height={this._height}
          overscanByPixels={100}
          ref={this._setMasonryRef}
          scrollTop={this._scrollTop}
          width={this._bodyWidth}
        />
      </div>
    );
  }

  render() {
    return (
      <WindowScroller overscanByPixels={0}>
        {this._renderAutoSizer}
      </WindowScroller>
    );
  }
}
